module.exports = app => {
  const patients = require('../controllers/patients.controller');

  const router = require('express').Router();

  // Create a new Patient
  router.post('/', patients.create);

  // Retrieve all Patients
  router.get('/', patients.findAll);

  // Retrieve all Schedules from Patient
  router.get('/:patientId', patients.getSchedules);

  // Update a Patient with patientId
  router.put('/:patientId', patients.update);

  // Delete a Patient with patientId
  router.delete('/:patientId', patients.delete);

  app.use('/api/v1/patients', router);
};