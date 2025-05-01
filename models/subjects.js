import { DataTypes } from 'sequelize';

/**
 * @description Defines the User model based on the migration.
 * @param {import('sequelize').Sequelize} sequelize - The Sequelize instance.
 * @param {import('sequelize').DataTypes} DataTypes - The Sequelize DataTypes.
 * @returns {import('sequelize').Model} The User model.
 */

export default (sequelize) => {
    const Subject = sequelize.define('Subject', {
        subject_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        subject_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subject_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        no_of_students:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'subjects',
        timestamps: true
    });

    return Subject;
};