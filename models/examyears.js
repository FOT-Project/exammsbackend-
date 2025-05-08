export default (sequelize, DataTypes) => {
  const ExamYear = sequelize.define('ExamYear', {
    year_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    academic_year: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'examyears',
    timestamps: true
  });

  return ExamYear;
};