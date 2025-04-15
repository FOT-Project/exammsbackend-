import UserRepository from '../repositories/user.repository.js';

const UserService = {
    async getAllUsers() {
        return await UserRepository.findAll();
    },

    async getUserById(id) {
        return await UserRepository.findById(id);
    },

    async createUser(userData) {
        return await UserRepository.create(userData);
    },

    async updateUser(id, userData) {
        return await UserRepository.update(id, userData);
    },

    async deleteUser(id) {
        return await UserRepository.delete(id);
    }
};

export default UserService;