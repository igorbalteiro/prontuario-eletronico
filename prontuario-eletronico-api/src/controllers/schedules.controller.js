const db = require('../models');
const Schedule = db.schedule;

// Create and Save a new Patient
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Body can not be empty!'
    });
    return;
  }

  // Create a Schedule
  const schedule = {
    patientName: req.body.patientName,
    date: req.body.date,
    description: req.body.description,
    patientID: req.body.patientID
  };

  // Save Schedule in the database
  Schedule.create(schedule)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Schedule.'
      });
    });
};

// Retrieve a Schedule from the database.
exports.findOne = (req, res) => {
  const id = req.params.scheduleId;

  Schedule.findOne({ id: id })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving a schedule.'
      });
    });
};

// Retrieve all Schedules from the database.
exports.findAll = (req, res) => {
  Schedule.findAll()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving schedules.'
      });
    });
};

// Update a Schedule by the scheduleId in the request
exports.update = (req, res) => {
  const id = req.params.scheduleId;

  Schedule.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Schedule was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update Schedule with id=${id}.`
        });
      }
    })
    // eslint-disable-next-line no-unused-vars
    .catch(err => {
      res.status(500).send({
        message: `Error updating Schedule with id=${id}.`
      });
    });
};

// Delete a Schedule with the specified scheduleId in the request
exports.delete = (req, res) => {
  const id = req.params.scheduleId;

  Schedule.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Schedule was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete Schedule with id=${id}.`
        });
      }
    })
    // eslint-disable-next-line no-unused-vars
    .catch(err => {
      res.status(500).send({
        message: `Cannot delete Schedule with id=${id}.`
      });
    });
};