import { Router } from "express";
import { createData, getData } from "../controllers/data.controller";

const dataRouter = Router();

dataRouter.post("/", createData);
dataRouter.get("/", getData);

export default dataRouter;
