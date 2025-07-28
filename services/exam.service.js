import ExamRepository from "../repositories/exam.repository.js";

const ExamService = {
  async getAllExams({ where, limit, offset }) {
    return await ExamRepository.findAll({ where, limit, offset });
  },

  async getExamById(id) {
    return await ExamRepository.findById(id);
  },

  async createExam(examData) {
    return await ExamRepository.create(examData);
  },

  async updateExam(id, examData) {
    return await ExamRepository.update(id, examData);
  },

  async deleteExam(id) {
    return await ExamRepository.delete(id);
  },
};

export default ExamService;