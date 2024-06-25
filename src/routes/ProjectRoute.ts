import { Router } from "express";
import { getProject } from "./../controller/ProjectController";

const router = Router();

router.get("/list", getProject);

export default router;
