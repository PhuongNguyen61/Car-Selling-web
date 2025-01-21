import { Router } from "express";
import UserRouter from "./userRouter/index.js";
import CarRouter from "./carRouter/index.js";
import NewsRouter from "./newsRouter/index.js";
const V1Router = Router();

V1Router.use("/users", UserRouter);
V1Router.use("/cars", CarRouter);
V1Router.use("/news", NewsRouter);

export default V1Router;
