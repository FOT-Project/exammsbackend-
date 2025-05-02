import { Router } from "express";
import SubjectController from "../controllers/subject.controller.js";

const SubjectRouter = Router();

// Define routes for subject operations
SubjectRouter.get("/", SubjectController.getAllSubjects);
SubjectRouter.get("/:id", SubjectController.getSubjectById);
SubjectRouter.post("/", SubjectController.createSubject);
SubjectRouter.put("/:id", SubjectController.updateSubject);
SubjectRouter.delete("/:id", SubjectController.deleteSubject);

export default SubjectRouter;
