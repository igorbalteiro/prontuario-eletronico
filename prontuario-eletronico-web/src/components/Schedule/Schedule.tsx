import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Schedule.css';

import SchedulesList from '../SchedulesList/SchedulesList';
import ScheduleModal from '../ScheduleModal/ScheduleModal';
import { newSchedule as newScheduleAction } from '../../actions/index';

const Schedule = ({ schedulesListData }) => {
  const dispatch = useDispatch();
  const newSchedule = useSelector((state) => state.newSchedule);

  const displaySchedulesList = () => {
    return schedulesListData.length > 0
      ? <SchedulesList schedulesList={schedulesListData} />
      : null
  }

  const renderConfirmationModal = () => {
    return (newSchedule)
      ? <ScheduleModal patientsList={schedulesListData} />
      : null;
  };

  return (
    <section className='Schedule'>
      <div className='Schedule-header'>
        <h3 className='Schedule-header-title'>Agendamentos</h3>
        <button className='Schedule-header-button' onClick={() => dispatch(newScheduleAction(true))}>Novo Agendamento</button>
      </div>
      {displaySchedulesList()}
      {renderConfirmationModal()}
    </section>
  );
}

Schedule.propTypes = {
  schedulesListData: PropTypes.array.isRequired
}

export default Schedule;
