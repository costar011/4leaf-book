import express from "express";
import globalController from "../controller/globalController";

const globaRouter = express.Router();

globaRouter.get("/", globalController.homeController);
globaRouter.get("/book", globalController.bookController);

export default globaRouter;
