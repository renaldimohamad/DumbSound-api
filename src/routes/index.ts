import { Router } from "express";
import postRoute from "./PostRoutes";
import authRoute from "./AuthRoute";

const route = Router();

route.use("/posts", postRoute);
route.use("/auth", authRoute);

export default route