import SubjectRepository from "../repositories/subject.repository.js";

const SubjectService = {
  async getAllSubjects({ limit, offset } = {}) {
    return await SubjectRepository.findAll({ limit, offset });
  },
  async getSubjectById(id) {
    return await SubjectRepository.findById(id);
  },
  async createSubject(subjectData) {
    return await SubjectRepository.create(subjectData);
  },
  async updateSubject(id, subjectData) {
    return await SubjectRepository.update(id, subjectData);
  },
  async deleteSubject(id) {
    return await SubjectRepository.delete(id);
  },
};

export default SubjectService;
