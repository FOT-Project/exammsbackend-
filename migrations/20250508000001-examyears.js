import { DataTypes } from 'sequelize';
'use strict';

export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('examyears', {
    year_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    academic_year: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    is_active: {
      type: Sequelize.BOOLEAN,
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
  await queryInterface.dropTable('examyears');
};