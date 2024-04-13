import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import routes from "./routes/routes";

// Configure environment variables
dotenv.config();
const PORT = process.env.PORT ?? 3000;
const DB_URL = process.env.DB_URL;

// Create express server
const app = express();

// Configure server
app.use(morgan("combined"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/", routes);

// Connect MongoDB database and then host server
mongoose
  .connect(DB_URL!)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`App server listening on port ${PORT}!`)
    );
  })
  .catch((error) => {
    console.log(error);
  });
