import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
// import cookieParser from 'cookie-parser';
import morgan from "morgan";
// import methodOverride from "method-override";
import cors from "cors";
import dotenv from "dotenv";
import Routes from "./routes/route.routes";

console.log("APP");

dotenv.config();

const app = express();

// Application middlewares
// app.use(helmet())
app.use(morgan('dev'));
app.use(express.json({ limit: "900mb" }));
app.use(express.urlencoded({ extended: true, limit: "900mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "900mb" }));
app.use(bodyParser.json());
app.use(cors());

app.use("/kitchen", Routes);

mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(`${process.env.PORT}`, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

export default app;
