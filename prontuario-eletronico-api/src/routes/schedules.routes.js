const express = require('express');
const router = express.Router();

const schedules = require('../controllers/schedules.controller');

// Create a new Schedule
router.post('/', schedules.create);

// Retrieve all Schedules
router.get('/', schedules.findAll);

// Update a Schedule with scheduleId
router.put('/:scheduleId', schedules.update);

// Delete a Schedule with scheduleId
router.delete('/:scheduleId', schedules.delete);

module.exports = router;