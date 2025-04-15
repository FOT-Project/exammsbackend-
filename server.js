import express from 'express';
import cors from 'cors';
import HomeRouter from "./routes/home.route.js";

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
app.use("/", HomeRouter)

// handle 404 errors
// This middlware hit, if not any routes is matched.
app.use(({ res }) => {
    res.status(404).json({ message: 'Not Found' });
});

export default app;

