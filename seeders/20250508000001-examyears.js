import { Op } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('examyears', [
    {
      academic_year: '2024/2025',
      is_active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      academic_year: '2023/2024',
      is_active: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('examyears', {
    year_id: {
      [Op.in]: [1, 2]
    }
  });
};