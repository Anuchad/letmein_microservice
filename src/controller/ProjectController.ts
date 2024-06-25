import { Request, Response } from "express";

export async function getProject(req: Request, res: Response): Promise<void> {
  // List projects logic here
  const a: String = "qeqwe";
  const pos_id = "";
  res.json([{ id: 1, name: "Project 3", posList: pos_id }]);
}
