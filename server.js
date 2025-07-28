import express from 'express';
import cors from 'cors';
import HomeRouter from "./routes/home.route.js";
import UserRouter from './routes/user.route.js';
import SubjectRouter from './routes/subject.route.js'
import ExamRouter from './routes/exam.route.js'

// load environment variables
import dotenv from 'dotenv';
dotenv.config();

// create an instance of express app
const app = express();

/**
 * * Middleware
 * By pass the cors - for development only,
 * in production make sure give access to only required urls
 */
app.use(cors());

/**
 * * * Middleware
 * Parse incoming request bodies JSON format 
 */

app.use(express.json());

// handle routes
app.use("/", HomeRouter);
app.use("/users", UserRouter);
app.use("/subjects",SubjectRouter)
app.use("/exams", ExamRouter)

// handle 404 errors
// This middlware hit, if not any routes is matched.
app.use(({ res }) => {
    res.status(404).json({ message: 'Not Found' });
});

// Define a custom error class for application-specific errors
class AppError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

// Centralized error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging

    // Handle application-specific errors
    if (err instanceof AppError) {
        return res.status(err.status).json({
            error: {
                message: err.message,
            },
        });
    }

    // Handle generic errors
    res.status(500).json({
        error: {
            message: 'Internal Server Error',
        },
    });
});

export default app;
export { AppError };

