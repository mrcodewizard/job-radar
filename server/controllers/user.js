
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res, next) => {
   const { username, password } = req.body;
    
   try {
      const user = await prisma.user.findUnique({
         where: {
            username: username
         }
      });
      const verify = await bcrypt.compare(password, user.password);
      if(!verify) {
         res.status(200).json({
            user: null,
            success: false,
            msg: "Invalid username or password"
         });
      }

      delete user.password;

      /** generate token if user is valid **/
      const token = jwt.sign({ id: user.id, username: user.username}, process.env.JWT_SECRET,{ expiresIn: "60d"});

      res.status(200).json({
         user: user,
         token: token,
         success: false,
         msg: "Login successfull"
      });
   }

   catch(error) {
      res.status(401).json({
         user: null,
         success: false,
         msg: error.message
      });
   }
}

export const register = async (req, res, next) => {
   const { username, password, firstName, lastName } = req.body;

   try {
      const alreadyExist = await prisma.user.findUnique({ where: { username: username }});

      if(!alreadyExist) {

         /** encrypt password **/
         const salt = await bcrypt.genSalt(10);
         const encryptPassword = await bcrypt.hash(password, salt);

         const user = await prisma.user.create({
            data: {
               username,
               password: encryptPassword,
               firstName,
               lastName
            }
         });

         delete user.password;

         res.status(200).json({
            user: user,
            success: true,
            msg: "User regsiter succesfully"
         });
      }

      res.status(401).json({
         user: null,
         success: false,
         msg: "User already registered"
      });

   }

   catch(error) {
      res.status(401).json({
         user: null,
         success: false,
         msg: error.message
      });
   }
}


