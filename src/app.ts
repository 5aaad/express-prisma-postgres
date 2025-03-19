import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

import { errorHandler } from "./middlewares/error.middleware";
import router from "./routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(errorHandler);
app.use(morgan("dev"));

app.use("/api/v1/", router);

export default app;
