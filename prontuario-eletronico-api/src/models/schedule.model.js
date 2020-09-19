const sql = require('./db.js');

const Schedule = function(schedule) {
  this.patientName = schedule.patientName;
  this.date = schedule.date;
  this.description = schedule.description;
  this.patientID = schedule.patientID;
};

Schedule.create = (newSchedule, result) => {
  sql.query('INSERT INTO schedules SET ?', newSchedule, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      result(err, null);
      return;
    }

    console.log('Created schedule: ', { id: res.insertId, ...newSchedule });
    result(null, { id: res.insertId, ...newSchedule });
  });
};

Schedule.getAll = result => {
  sql.query('SELECT * FROM schedules', (err, res) => {
    if (err) {
      console.log('Error: ', err);
      result(null, err);
      return;
    }

    console.log('Patients: ', res);
    result(null, res);
  });
};

Schedule.findById = (scheduleId, result) => {
  sql.query(`SELECT * FROM schedules WHERE id = ${scheduleId}`, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log('Found schedule: ', res[0]);
      result(null, res[0]);
      return;
    }

    // not found Schedule with the id
    result({ kind: 'not_found' }, null);
  });
};


Schedule.update = (id, schedule, result) => {
  sql.query(
    'UPDATE schedules SET date = ?, description = ? WHERE id = ?',
    [ schedule.date, schedule.description, id ],
    (err, res) => {
      if (err) {
        console.log('Error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Schedule with the id
        result({ kind: 'not_found' }, null);
        return;
      }

      console.log('Updated schedule: ', { id: id, ...schedule });
      result(null, { id: id, ...schedule });
    }
  );
};

Schedule.remove = (id, result) => {
  sql.query('DELETE FROM schedules WHERE id = ?', id, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Schedule with the id
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('Deleted schedule with id: ', id);
    result(null, res);
  });
};

module.exports = Schedule;