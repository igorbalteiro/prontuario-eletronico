const db = require('../models');
const Patient = db.patient;
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

  // Create a Patient
  const patient = {
    name: req.body.name,
    telephone: req.body.telephone,
    birthDate: req.body.birthDate,
    gender: req.body.gender,
    height: req.body.height,
    weight: req.body.weight
  };

  // Save Patient in the database
  Patient.create(patient)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Patient.'
      });
    });
};

// Retrieve a Patient from the database.
exports.findOne = (req, res) => {
  const id = req.params.patientId;

  Patient.findOne({ id: id })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving a patient.'
      });
    });
};

// Retrieve all Patients from the database.
exports.findAll = (req, res) => {
  Patient.findAll()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving patients.'
      });
    });
};

// Find schedules for a single Patient with a patientId
exports.getSchedules = (req, res) => {
  const id = req.params.patientId;

  Patient.findOne({
    id: id,
    include: [{
      model: Schedule
    }]
  })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving a patient.'
      });
    });
};


// Update a Patient by the patientId in the request
exports.update = (req, res) => {
  const id = req.params.patientId;

  Patient.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Patient was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update Patient with id=${id}.`
        });
      }
    })
    // eslint-disable-next-line no-unused-vars
    .catch(err => {
      res.status(500).send({
        message: `Error updating Patient with id=${id}.`
      });
    });
};

// Delete a Patient with the specified patientId in the request
exports.delete = (req, res) => {
  const id = req.params.patientId;

  Patient.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Patient was deleted successfully!'
        });
      } else {
        res.send({
          message: `Cannot delete Patient with id=${id}.`
        });
      }
    })
    // eslint-disable-next-line no-unused-vars
    .catch(err => {
      res.status(500).send({
        message: `Cannot delete Patient with id=${id}.`
      });
    });
};