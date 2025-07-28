import { DataTypes } from 'sequelize';
'use strict';

export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('examdetails', {
    detail_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    exam_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'exams',
        key: 'exam_id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    detail_type: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    detail_text: {
      type: Sequelize.TEXT,
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
  await queryInterface.dropTable('examdetails');
};