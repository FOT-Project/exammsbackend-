import { Router } from "express";
import ExamController from "../controllers/exam.controller.js";

const ExamRouter = Router();

ExamRouter.get("/", ExamController.getAllExams);
ExamRouter.get("/:id", ExamController.getExamById);
ExamRouter.post("/", ExamController.createExam);
ExamRouter.put("/:id", ExamController.updateExam);
ExamRouter.delete("/:id", ExamController.deleteExam);

export default ExamRouter;