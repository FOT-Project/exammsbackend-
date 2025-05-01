import db from '../models/index.js';

const { Subject } = db;

const SubjectRepository = {
    async findAll(){
        return await Subject.findAll();
    },
    async findById(id){
        return await Subject.findByPk(id);
    },
    async create(subjectData){
        return await Subject.create(subjectData);
    }
}

export default SubjectRepository;