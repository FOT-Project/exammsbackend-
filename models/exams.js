export default (sequelize, DataTypes) => {
  const Exam = sequelize.define('Exam', {
    exam_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    exam_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exam_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    tableName: 'exams',
    timestamps: true
  });

  Exam.associate = (models) => {
    Exam.belongsTo(models.Subject, { foreignKey: 'subject_id' });
    Exam.belongsTo(models.ExamYear, { foreignKey: 'year_id' });


    Exam.hasMany(models.ExamDetail, {
      foreignKey: 'exam_id',
      sourceKey: 'exam_id'
    });
  };

  return Exam;
};
