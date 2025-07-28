import { DataTypes } from 'sequelize';
'use strict';

export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('exams', {
    exam_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    exam_name: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    subject_id: {
  type: Sequelize.INTEGER,
  allowNull: false,
  references: {
    model: 'subjects',
    key: 'subject_id' 
  },
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE'
}
,
    year_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'examyears',
        key: 'year_id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    exam_date: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    start_time: {
      type: Sequelize.TIME,
      allowNull: false
    },
    end_time: {
      type: Sequelize.TIME,
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
  await queryInterface.dropTable('exams');
};