import { error } from "console";
import { AppError } from "../server.js";
import SubjectService from "../services/subject.service.js";

const SubjectController = {
  async getAllSubjects(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query.limit) || 10;
      const offset = (page - 1) * pageSize;

      const { count, rows } = await SubjectService.getAllSubjects({
        limit: pageSize,
        offset,
      });

      res.status(200).json({
        totalItems: count,
        currentPage: page,
        pageSize: pageSize,
        totalPages: Math.ceil(count / pageSize),
        data: rows,
      });
    } catch (error) {
      next(new AppError(error.message, 500));
    }
  },

  async getSubjectById(req, res, next) {
    try {
      const subject = await SubjectService.getSubjectById(req.params.id);
      if (!subject) {
        return next(new AppError("Subject Not Found", 404));
      }
      res.status(200).json(subject);
    } catch (error) {
      next(new AppError(error.message, 500));
    }
  },

  async createSubject(req, res, next) {
    try {
      const subject = await SubjectService.createSubject(req.body);
      res.status(200).json(subject);
    } catch (error) {
      next(new AppError(error.message, 500));
    }
  },

  async updateSubject(req, res, next) {
    try {
      const updatedSubject = await SubjectService.updateSubject(
        req.params.id,
        req.body
      );
      if (updatedSubject) {
        res.status(200).json(updatedSubject);
      } else {
        next(new AppError("Subject not found", 404));
      }
    } catch (error) {
      next(new AppError(error.message, 500));
    }
  },

  async deleteSubject(req, res, next) {
    try {
      const isDeleted = await SubjectService.deleteSubject(req.params.id);
      if (isDeleted) {
        res.status(200).json({ message: "Subject deleted successfully" });
      } else {
        next(new AppError("Subject not found", 404));
      }
    } catch (error) {
      next(new AppError(error.message, 500));
    }
  },
};

export default SubjectController;
