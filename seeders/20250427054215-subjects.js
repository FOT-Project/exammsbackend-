'use strict';

import { Op } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('subjects', [
    {
      subject_code: 'TMS1161',
      subject_name: 'Applied Calculus',
      description: 'something about subject',
      no_of_students: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      subject_code: 'TMS1173',
      subject_name: 'Fundamentals Of Mathematics',
      description: 'something about subject',
      no_of_students: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('subjects', {
    subject_code: {
      [Op.in]: ['TMS1161', 'TMS1173']
    }
  });
};

