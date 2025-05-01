import SubjectRepository from '../repositories/subject.repository.js';

const SubjectService = {
    async getAllSubjects() {
        return await SubjectRepository.findAll();
    },
    async getSubjectById(id){
        return await SubjectRepository.findById(id);
    },
    async createSubject(subjectData){
        return await SubjectRepository.create(subjectData);
    }
}

export default SubjectService;