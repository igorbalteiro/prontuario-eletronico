const Patient = require('../models/patient.model.js');

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Body can not be empty!'
    });
  }

  // Create a Patient
  const patient = new Patient({
    name: req.body.name,
    telephone: req.body.telephone,
    birthDate: req.body.birthDate,
    gender: req.body.gender,
    height: req.body.height,
    weight: req.body.weight
  });

  // Save Patient in the database
  Patient.create(patient, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Patient.'
      });
    }

    res.status(200).send(data);
  });
};

// Retrieve all Patients from the database.
exports.findAll = (req, res) => {
  Patient.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving customers.'
      });
    }

    res.status(200).send(data);
  });
};

// Find a single Patient with a patientId
exports.findOne = (req, res) => {
  Patient.findById(req.params.patientId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Patient with id ${req.params.patientId}.`
        });
      } else {
        res.status(500).send({
          message: 'Error retrieving Patient with id ' + req.params.patientId
        });
      }
    }

    res.status(200).send(data);
  });
};

// Find schedules for a single Patient with a patientId
exports.getSchedules = (req, res) => {
  Patient.getSchedules(req.params.patientId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Patient with id ${req.params.patientId}.`
        });
      } else {
        res.status(500).send({
          message: 'Error retrieving schedules with patient id ' + req.params.patientId
        });
      }
    }

    res.status(200).send(data);
  });
};


// Update a Patient identified by the patientId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: 'Body can not be empty!'
    });
  }

  console.log(req.body);

  Patient.update(
    req.params.patientId,
    new Patient(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `Not found Patient with id ${req.params.patientId}.`
          });
        } else {
          res.status(500).send({
            message: 'Error updating Patient with id ' + req.params.patientId
          });
        }
      }

      res.status(200).send(data);
    }
  );
};

// Delete a Patient with the specified patientId in the request
exports.delete = (req, res) => {
  // eslint-disable-next-line no-unused-vars
  Patient.remove(req.params.patientId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Patient with id ${req.params.patientId}.`
        });
      } else {
        res.status(500).send({
          message: 'Could not delete Patient with id ' + req.params.patientId
        });
      }
    }

    res.status(200).send({ message: 'Patient was deleted successfully!' });
  });
};