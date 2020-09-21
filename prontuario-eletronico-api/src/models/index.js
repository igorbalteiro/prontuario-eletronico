const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.patient = require('./patient.model')(sequelize, Sequelize);
db.schedule = require('./schedule.model')(sequelize, Sequelize);

db.patient.hasMany(db.schedule, {foreignKey: 'patientID', sourceKey: 'id'});
db.schedule.belongsTo(db.patient, {foreignKey: 'patientID', targetKey: 'id'});

module.exports = db;