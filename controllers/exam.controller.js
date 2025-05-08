import { AppError } from "../server.js";
import ExamService from "../services/exam.service.js";

const ExamController = {
  async getAllExams(req, res, next) {
    try {
      const { subject_id, year_id, date_from, date_to, page = 1, limit = 10 } = req.query;
      const offset = (page - 1) * limit;

      const where = {};
      if (subject_id) where.subject_id = subject_id;
      if (year_id) where.year_id = year_id;
      if (date_from && date_to) where.exam_date = { $between: [date_from, date_to] };

      const { count, rows } = await ExamService.getAllExams({ where, limit, offset });

      res.status(200).json({
        totalItems: count,
        currentPage: page,
        pageSize: limit,
        totalPages: Math.ceil(count / limit),
        data: rows,
      });
    } catch (error) {
      next(new AppError(error.message, 500));
    }
  },

  async getExamById(req, res, next) {
    try {
      const exam = await ExamService.getExamById(req.params.id);
      if (!exam) {
        return next(new AppError("Exam Not Found", 404));
      }
      res.status(200).json(exam);
    } catch (error) {
      next(new AppError(error.message, 500));
    }
  },

  async createExam(req, res, next) {
    try {
      const exam = await ExamService.createExam(req.body);
      res.status(201).json(exam);
    } catch (error) {
      next(new AppError(error.message, 500));
    }
  },

  async updateExam(req, res, next) {
    try {
      const updatedExam = await ExamService.updateExam(req.params.id, req.body);
      if (updatedExam) {
        res.status(200).json(updatedExam);
      } else {
        next(new AppError("Exam not found", 404));
      }
    } catch (error) {
      next(new AppError(error.message, 500));
    }
  },

  async deleteExam(req, res, next) {
    try {
      const isDeleted = await ExamService.deleteExam(req.params.id);
      if (isDeleted) {
        res.status(200).json({ message: "Exam deleted successfully" });
      } else {
        next(new AppError("Exam not found", 404));
      }
    } catch (error) {
      next(new AppError(error.message, 500));
    }
  },
};

export default ExamController;