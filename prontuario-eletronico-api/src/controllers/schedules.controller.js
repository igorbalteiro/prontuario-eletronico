const Schedule = require('../models/schedule.model.js');

// Create and Save a new Schedule
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Body can not be empty!'
    });
  }

  // Create a Schedule
  const schedule = new Schedule({
    patientName: req.body.patientName,
    date: req.body.date,
    description: req.body.description,
    patientID: req.body.patientID
  });

  // Save Schedule in the database
  Schedule.create(schedule, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Schedule.'
      });
    }

    res.status(200).send(data);
  });
};

// Retrieve all Schedules from the database.
exports.findAll = (req, res) => {
  Schedule.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving schedules.'
      });
    }

    res.status(200).send(data);
  });
};

// Find a single Schedule with a scheduleId
exports.findOne = (req, res) => {
  Schedule.findById(req.params.scheduleId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Schedule with id ${req.params.scheduleId}.`
        });
      } else {
        res.status(500).send({
          message: 'Error retrieving Schedule with id ' + req.params.scheduleId
        });
      }
    }

    res.status(200).send(data);
  });
};

// Update a Schedule identified by the scheduleId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: 'Body can not be empty!'
    });
  }

  console.log(req.body);

  Schedule.update(
    req.params.scheduleId,
    new Schedule(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `Not found Schedule with id ${req.params.scheduleId}.`
          });
        } else {
          res.status(500).send({
            message: 'Error updating Schedule with id ' + req.params.scheduleId
          });
        }
      }

      res.status(200).send(data);
    }
  );
};

// Delete a Schedule with the specified scheduleId in the request
exports.delete = (req, res) => {
  // eslint-disable-next-line no-unused-vars
  Schedule.remove(req.params.scheduleId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Schedule with id ${req.params.scheduleId}.`
        });
      } else {
        res.status(500).send({
          message: 'Could not delete Schedule with id ' + req.params.scheduleId
        });
      }
    }

    res.status(200).send({ message: 'Schedule was deleted successfully!' });
  });
};