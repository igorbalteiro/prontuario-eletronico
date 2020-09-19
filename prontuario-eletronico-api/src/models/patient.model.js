const sql = require('./db.js');

const Patient = function(patient) {
  this.name = patient.name;
  this.telephone = patient.telephone;
  this.birthDate = patient.birthDate;
  this.gender = patient.gender;
  this.height = patient.height;
  this.weight = patient.weight;
};

Patient.create = (newPatient, result) => {
  sql.query('INSERT INTO patients SET ?', newPatient, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      result(err, null);
      return;
    }

    console.log('Created patient: ', { id: res.insertId, ...newPatient });
    result(null, { id: res.insertId, ...newPatient });
  });
};

Patient.getAll = result => {
  sql.query('SELECT * FROM patients', (err, res) => {
    if (err) {
      console.log('Error: ', err);
      result(null, err);
      return;
    }

    console.log('Patients: ', res);
    result(null, res);
  });
};

Patient.findById = (patientId, result) => {
  sql.query(`SELECT * FROM patients WHERE id = ${patientId}`, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log('Found patient: ', res[0]);
      result(null, res[0]);
      return;
    }

    // not found Patient with the id
    result({ kind: 'not_found' }, null);
  });
};

Patient.update = (id, patient, result) => {
  sql.query(
    'UPDATE patients SET name = ?, telephone = ?, birthDate = ?, gender = ?, height = ?, weight = ? WHERE id = ?',
    [ patient.name, patient.telephone, patient.birthDate, patient.gender, patient.height, patient.weight, id ],
    (err, res) => {
      if (err) {
        console.log('Error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: 'not_found' }, null);
        return;
      }

      console.log('Updated patient: ', { id: id, ...patient });
      result(null, { id: id, ...patient });
    }
  );
};

Patient.remove = (id, result) => {
  sql.query('DELETE FROM patients WHERE id = ?', id, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Patient with the id
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('Deleted patient with id: ', id);
    result(null, res);
  });
};

Patient.getSchedules = (id, result) => {
  sql.query('SELECT schedules.* FROM schedules INNER JOIN patients ON schedules.patientID=patients.id WHERE patients.id = ?', id, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Patient with the id
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('Found schedules for patient with id: ', id);
    result(null, res);
  });
};

module.exports = Patient;