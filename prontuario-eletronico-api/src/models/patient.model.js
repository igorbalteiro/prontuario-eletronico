module.exports = (sequelize, Sequelize) => {
  const Patient = sequelize.define('patient', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    telephone: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    birthDate: {
      type: Sequelize.STRING(13),
      allowNull: false
    },
    gender: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    height: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    weight: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
  });

  return Patient;
};