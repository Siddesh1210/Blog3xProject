import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import dbConfig from "./DB/dbConfig.js";
import userRoutes from "./Routes/user.routes.js";

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(cors());

(()=>{
    dbConfig()
})()

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started at PORT ", process.env.PORT);
});
