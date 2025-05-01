'use strict';

/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface, Sequelize) => {
  /**
   * Create table for subjects
   * This table will store subject information
   */
  await queryInterface.createTable('subjects', {
    subject_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    subject_code: {
      type: Sequelize.STRING,
      allowNull: false
    },
    subject_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    no_of_students: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });
};

export const down = async (queryInterface, Sequelize) => {
  /**
   * Add reverting command of subjects table.
   */
  await queryInterface.dropTable('subjects');
};
