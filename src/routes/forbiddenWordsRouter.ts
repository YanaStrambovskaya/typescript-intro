import express from "express";
const router = express.Router();

import forbiddenWordsController from "../controllers/forbiddenWordsController";

router.post("/", forbiddenWordsController);

export default router;
