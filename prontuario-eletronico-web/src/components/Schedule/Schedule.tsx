import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Schedule.css';

import SchedulesList from './SchedulesList/SchedulesList';
import NewScheduleModal from '../ScheduleModal/NewSchedule/NewSchedule';
import UpdateScheduleModal from '../ScheduleModal/UpdateSchedule/UpdateSchedule';
import { createScheduleModal as createScheduleModalAction } from '../../actions/index';

const Schedule = ({ schedulesListData, patientsListData }) => {
  const dispatch = useDispatch();
  const createScheduleModal = useSelector((state) => state.createScheduleModal);
  const updateScheduleModal = useSelector((state) => state.updateScheduleModal);
  const selectedSchedule = useSelector((state) => state.selectedSchedule);

  const displaySchedulesList = () => {
    return schedulesListData.length > 0
      ? <SchedulesList schedulesList={schedulesListData} />
      : <p className='Schedule-empty'>Nenhuma consulta agendada</p>
  }

  const renderNewScheduleModal = () => {
    return (createScheduleModal)
      ? <NewScheduleModal patientsList={patientsListData} />
      : null;
  };

  const renderUpdateScheduleModal = () => {
    return (updateScheduleModal)
      ? <UpdateScheduleModal patientsList={schedulesListData} scheduleData={selectedSchedule} />
      : null;
  };

  return (
    <section className='Schedule'>
      <div className='Schedule-header'>
        <h3 className='Schedule-header-title'>Agendamentos</h3>
        <button className='Schedule-header-button' onClick={() => dispatch(createScheduleModalAction(true))}>Novo Agendamento</button>
      </div>
      {displaySchedulesList()}
      {renderNewScheduleModal()}
      {renderUpdateScheduleModal()}
    </section>
  );
}

Schedule.propTypes = {
  schedulesListData: PropTypes.array.isRequired,
  patientsListData: PropTypes.array.isRequired,
}

export default Schedule;
