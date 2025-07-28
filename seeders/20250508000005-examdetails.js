import { Op } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('examdetails', [
    {
      exam_id: 1,
      detail_type: 'Instruction',
      detail_text: 'Bring your ID card.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      exam_id: 2,
      detail_type: 'Instruction',
      detail_text: 'No electronic devices allowed.',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('examdetails', {
    detail_id: {
      [Op.in]: [1, 2]
    }
  });
};