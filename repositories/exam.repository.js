import db from "../models/index.js";

const { Exam } = db;

const ExamRepository = {
  async findAll({ where, limit, offset }) {
    return await Exam.findAndCountAll({ where, limit, offset });
  },

  async findById(id) {
    return await Exam.findByPk(id);
  },

  async create(examData) {
    return await Exam.create(examData);
  },

  async update(id, examData) {
    const exam = await Exam.findByPk(id);
    if (exam) {
      await exam.update(examData);
      return exam;
    }
    return null;
  },

  async delete(id) {
    const exam = await Exam.findByPk(id);
    if (exam) {
      await exam.destroy();
      return true;
    }
    return false;
  },
};

export default ExamRepository;