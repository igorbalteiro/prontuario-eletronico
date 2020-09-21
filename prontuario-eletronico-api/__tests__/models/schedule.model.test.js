const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} = require('sequelize-test-helpers');

const ScheduleModel = require('../../src/models/schedule.model');

describe('ScheduleModel', () => {
  const Schedule = ScheduleModel(sequelize, dataTypes);
  const instance = new Schedule();

  checkModelName(Schedule)('schedule');

  context('properties', () => {
    [ 'patientName', 'description', 'date', 'patientID' ].forEach(checkPropertyExists(instance));
  });
});