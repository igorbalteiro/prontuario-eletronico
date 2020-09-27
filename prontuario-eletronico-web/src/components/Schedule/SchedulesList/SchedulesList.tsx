import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './SchedulesList.css';

import {
  updateScheduleModal as updateScheduleModalAction,
  selectedSchedule as selectedScheduleAction
} from '../../../actions/index';

const Schedules = ({ schedulesList }) => {
  const dispatch = useDispatch();

  const selectSchedule = (schedule: any) => {
    dispatch(selectedScheduleAction(schedule));
    dispatch(updateScheduleModalAction(true));
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
