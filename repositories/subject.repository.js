import db from "../models/index.js";

const { Subject } = db;

const SubjectRepository = {
  async findAll({ limit, offset }) {
    return await Subject.findAndCountAll({ limit, offset });
  },

  async findById(id) {
    return await Subject.findByPk(id);
  },
  async create(subjectData) {
    return await Subject.create(subjectData);
  },
  async update(id, subjectData) {
    const subject = await Subject.findByPk(id);
    if (subject) {
      await subject.update(subjectData);
      return subject;
    }
    return null;
  },
  async delete(id) {
    const subject = await Subject.findByPk(id);
    if (subject) {
      await subject.destroy();
      return true;
    }
    return false;
  },
};

export default SubjectRepository;
