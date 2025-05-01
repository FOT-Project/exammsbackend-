import { AppError } from '../server.js';
import UserService from '../services/user.service.js';

const UserController = {
    async getAllUsers(req, res, next) {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            next(new AppError(error.message, 500));
        }
    },

  async getUserById(req, res, next) {
    try {
        const user = await UserService.getUserById(req.params.id);
        if (!user) {
            return next(new AppError('User not found', 404));
        }
        res.status(200).json(user);
    } catch (error) {
        next(new AppError(error.message, 500));
    }
},

    async createUser(req, res, next) {
        try {
            const newUser = await UserService.createUser(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            next(new AppError(error.message, 500));
        }
    },

    async updateUser(req, res, next) {
        try {
            const updatedUser = await UserService.updateUser(req.params.id, req.body);
            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                next(new AppError('User not found', 404));
            }
        } catch (error) {
            next(new AppError(error.message, 500));
        }
    },

    async deleteUser(req, res, next) {
        try {
            const isDeleted = await UserService.deleteUser(req.params.id);
            if (isDeleted) {
                res.status(200).json({ message: 'User deleted successfully' });
            } else {
                next(new AppError('User not found', 404));
            }
        } catch (error) {
            next(new AppError(error.message, 500));
        }
    }
};

export default UserController;