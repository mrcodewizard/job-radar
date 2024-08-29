import express from "express";
import cors from "cors";
const app = express();

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

import userRoute from "./routes/user.js";
import { validateToken } from "./middlewares/validateToken.js";

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors());

async function main() {
   try {
      await prisma.$connect();
      console.log("Database connection successful");
   } catch(error) {
      console.error('Erorr:', error);
      await prisma.$disconnect();
   }
}

main();

app.get("/", (req, res, next) => {
   console.log("server is running");
});

app.use("/api/user", userRoute);
app.get("/api/test", validateToken, (req, res, next) => {
   res.send("Authenticaton sucessfull");
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
   console.log(`App started on http://localhost:${port}`);
})