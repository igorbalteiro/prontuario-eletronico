import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Schedule.css';

import SchedulesList from '../SchedulesList/SchedulesList';
import NewScheduleModal from '../ScheduleModal/NewSchedule/NewSchedule';
import UpdateScheduleModal from '../ScheduleModal/UpdateSchedule/UpdateSchedule';
import { newSchedule as newScheduleAction } from '../../actions/index';

const Schedule = ({ schedulesListData }) => {
  const dispatch = useDispatch();
  const newSchedule = useSelector((state) => state.newSchedule);
  const updateSchedule = useSelector((state) => state.updateSchedule);
  const scheduleDate = useSelector((state) => state.scheduleDate);

  const displaySchedulesList = () => {
    return schedulesListData.length > 0
      ? <SchedulesList schedulesList={schedulesListData} />
      : <p className='Schedule-empty'>Nenhuma consulta agendada</p>
  }

  const renderNewScheduleModal = () => {
    return (newSchedule)
      ? <NewScheduleModal patientsList={schedulesListData} />
      : null;
  };

  const renderUpdateScheduleModal = () => {
    return (updateSchedule)
      ? <UpdateScheduleModal patientsList={schedulesListData} scheduleDate={scheduleDate} />
      : null;
  };

  return (
    <section className='Schedule'>
      <div className='Schedule-header'>
        <h3 className='Schedule-header-title'>Agendamentos</h3>
        <button className='Schedule-header-button' onClick={() => dispatch(newScheduleAction(true))}>Novo Agendamento</button>
      </div>
      {displaySchedulesList()}
      {renderNewScheduleModal()}
      {renderUpdateScheduleModal()}
    </section>
  );
}

Schedule.propTypes = {
  schedulesListData: PropTypes.array.isRequired
}

export default Schedule;
