import { Request, Response } from "express";
function homeController(req: Request, res: Response) {
  res.render("index", { updatedText: null });
}

export default homeController;
