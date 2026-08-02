import express from "express";
const router = express.Router();

import homeController from "../controllers/homeController";

router.get("/", homeController);

export default router;
