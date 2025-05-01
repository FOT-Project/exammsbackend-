import { AppError } from '../server.js';
import SubjectService from '../services/subject.service.js'



const SubjectController = {

    async getAllSubjects(req, res, next) {
        try {
            const subjects = await SubjectService.getAllSubjects();
            res.status(200).json(subjects);
        } catch (error) {
            next(new AppError(error.message, 500));
        }
    },
    
    async getSubjectById(req,res,next){
        try{
            const subject = await SubjectService.getSubjectById(req.params.id);
            if(!subject){
                return next(new AppError('Subject Not Found',404));
            }
            res.status(200).json(subject);
        }catch(error){
            next(new AppError(error.message,500));
        }
    },

    async createSubject(req,res,next){
        try{
            const subject = await SubjectService.createSubject(req.body);
            res.status(200).json(subject);
        }catch{
            next(new AppError(error.message,500));
        }
    }
}

export default SubjectController;