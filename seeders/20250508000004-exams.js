'use strict';

/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('exams', [
    {
      exam_name: 'Mathematics Midterm',
      subject_id: 1,       // Make sure this subject_id exists
      year_id: 1,          // Make sure this year_id exists
      exam_date: '2025-08-15',
      start_time: '09:00:00',
      end_time: '11:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      exam_name: 'Science Final',
      subject_id: 2,       // Ensure this exists
      year_id: 1,
      exam_date: '2025-09-10',
      start_time: '13:00:00',
      end_time: '15:00:00',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('exams', null, {});
};
