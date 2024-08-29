import jwt from "jsonwebtoken";

export const validateToken = (req, res, next) => {
   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(" ")[1];

   if(!token) {
      res.status(401).json({
         success: false,
         msg: "Unauthorized"
      })
   }

   jwt.verify(token, process.env.JWT_SECRET, (error, data) => {
      if(error) {
            res.status(403).json({
            success: false,
            msg: "Forbidden resources"
         })
      }
      req.user = data;
      next();
   })
}