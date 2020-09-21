module.exports = (sequelize, Sequelize) => {
  const Schedule = sequelize.define('schedule', {
    patientName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT('long'),
      allowNull: true
    },
    date: {
      type: Sequelize.STRING(13),
      allowNull: false
    },
    patientID: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
  });

  return Schedule;
};