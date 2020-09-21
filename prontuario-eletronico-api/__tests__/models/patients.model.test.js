const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} = require('sequelize-test-helpers');

const PatientModel = require('../../src/models/patient.model');

describe('PatientModel', () => {
  const Model = PatientModel(sequelize, dataTypes);
  const instance = new Model();
  checkModelName(Model)('patient');

  context('properties', () => {
    [ 'name', 'telephone', 'birthDate', 'gender', 'height', 'weight' ].forEach(checkPropertyExists(instance));
  });
});