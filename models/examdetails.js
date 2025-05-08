export default (sequelize, DataTypes) => {
  const ExamDetail = sequelize.define('ExamDetail', {
    detail_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    exam_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    detail_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    detail_text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'examdetails',
    timestamps: true
  });

  ExamDetail.associate = (models) => {
    ExamDetail.belongsTo(models.Exam, { foreignKey: 'exam_id' });
  };

  return ExamDetail;
};