import React from 'react';
import PropTypes from 'prop-types';
import './Schedule.css';

import SchedulesList from '../SchedulesList/SchedulesList';

const Schedule = ({ schedulesListData }) => {
  const displaySchedulesList = () => {
    return schedulesListData.length > 0
      ? <SchedulesList schedulesList={schedulesListData} />
      : null
  }

  return (
    <section className='Schedule'>
      <div className='Schedule-header'>
        <h3 className='Schedule-header-title'>Agendamentos</h3>
        <button className='Schedule-header-button'>Novo Agendamento</button>
      </div>
      {displaySchedulesList()}
    </section>
  );
}

Schedule.propTypes = {
  schedulesListData: PropTypes.array.isRequired
}

export default Schedule;
