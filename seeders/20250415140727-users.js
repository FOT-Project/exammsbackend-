'use strict';

import { Op } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('users', [
    {
      name: 'Alice Smith',
      email: 'alice@example.com',
      password: 'password123',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Bob Johnson',
      email: 'bob@example.com',
      password: 'password456',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('users', {
    email: {
      [Op.in]: ['alice@example.com', 'bob@example.com']
    }
  });
};

/**
 * * @description This seed file populates the users table with initial data.
 * and the undo funtion is useful to remove the seeded users easily 
 */