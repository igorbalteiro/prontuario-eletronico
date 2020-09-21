module.exports = app => {
  const schedules = require('../controllers/schedules.controller');

  const router = require('express').Router();

  // Create a new Schedule
  router.post('/', schedules.create);

  // Retrieve all Schedule
  router.get('/', schedules.findAll);

  // Update a Schedule with scheduleId
  router.put('/:scheduleId', schedules.update);

  // Delete a Schedule with scheduleId
  router.delete('/:scheduleId', schedules.delete);

  app.use('/api/v1/schedules', router);
};