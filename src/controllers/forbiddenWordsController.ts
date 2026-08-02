import { Request, Response } from "express";
import highlightForbiddenWords from "../services/highlightForbiddenWords";

function forbiddenWordsController(req: Request, res: Response) {
  const updatedText = highlightForbiddenWords(
    req.body.text,
    req.body.forbiddenWordsArr
  );

  res.status(200).send({ updatedText });
}

export default forbiddenWordsController;
