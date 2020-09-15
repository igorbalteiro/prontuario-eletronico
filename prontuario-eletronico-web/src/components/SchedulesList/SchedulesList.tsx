import React from 'react';
import PropTypes from 'prop-types';
import './SchedulesList.css';

const Schedules = ({ schedulesList }) => {
  return (
    <table className='Schedules-list-table'>
      <thead>
        <tr>
          <th>Paciente</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {schedulesList.map((schedule: any, index: number) => (
          <tr key={index}>
            <td>{schedule.patientName}</td>
            <td>{schedule.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Schedules.propTypes = {
  schedulesList: PropTypes.array.isRequired
}

export default Schedules;
