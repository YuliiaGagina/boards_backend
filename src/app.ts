import express, { ErrorRequestHandler, Response, Request, NextFunction  } from "express";
import createHttpError from "http-errors";
import exampleRoute from "./routes/exampleRoutes";
import mongoose from "mongoose";
import { DB, PORT } from "./config";
import { errorHandler } from "./middleware/errorHandler";
const logger = require("morgan");
const cors = require("cors");


const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";







app.use(errorHandler);
mongoose.set('strictQuery', true);
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to db");
    app.listen(PORT, () => {
      console.log(`Listening On PORT ${PORT}`);
    });
  })
  .catch(() => {
    throw createHttpError(501, "Unable to connect database");
  });


const cardsRouter = require("./routes/api/cards");
const todosRouter = require("./routes/api/todos");

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());




app.use("/api/cards", cardsRouter);
app.use("/api/todos", todosRouter);


app.use(() => {
  throw createHttpError(404, "Route not found");
});



app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message});
});
