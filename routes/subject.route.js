import { Router } from 'express';
import SubjectController from '../controllers/subject.controller.js';

const SubjectRouter = Router();

// Define routes for subject operations
SubjectRouter.get('/', SubjectController.getAllSubjects);
SubjectRouter.get('/:id', SubjectController.getSubjectById);
SubjectRouter.post('/',SubjectController.createSubject);

export default SubjectRouter;
