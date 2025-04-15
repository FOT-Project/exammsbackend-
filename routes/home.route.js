/**
 * @fileoverview Defines the route for the home endpoint of the API.
 * @module routes/home
 * @description The purpose of this file is to handle all incomming api calls to the /home, 
 * or / endpoint of the API. 
 */

/**
   * GET /
   * @summary Handles the root endpoint of the API.
   * @description Responds with a welcome message.
   * @function
   * @name getHome
   * @memberof module:routes/home
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {void} Sends a JSON response with a welcome message.
   */


// import router module form express
import { Router } from 'express';

// create a router instance names as Home Router
const HomeRouter = Router();


HomeRouter.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the API!' });
});

// feel free to add more routes

export default HomeRouter;