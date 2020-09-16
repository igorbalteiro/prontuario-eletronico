import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './SchedulesList.css';

import {
  updateSchedule as updateScheduleAction,
  scheduleDate as scheduleDateAction
} from '../../actions/index';

const Schedules = ({ schedulesList }) => {
  const dispatch = useDispatch();

  const selectSchedule = (schedule: any) => {
    dispatch(scheduleDateAction(schedule.date));
    dispatch(updateScheduleAction(true));
  };

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
          <tr key={index} onClick={() => selectSchedule(schedule)}>
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
