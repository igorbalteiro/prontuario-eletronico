import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  updateScheduleModal as updateScheduleModalAction,
  deleteSchedule as deleteScheduleAction,
  updateSchedule as updateScheduleAction
} from '../../../../actions/index';
import { ReactComponent as CloseIcon } from '../../close.svg';
import '../ScheduleModal.css';

import ScheduleDateSelector from '../ScheduleDateSelector/ScheduleDateSelector';

import {
  deleteSchedule as deleteScheduleClient,
  updateSchedule as updateScheduleClient
} from '../../../../client/index';

const UpdateScheduleModal = ({ patientsList, scheduleData }) => {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(moment(scheduleData.date, 'DD/MM/YYYY HH:mm').toDate());

  const closeConfirmationModal = () => {
    dispatch(updateScheduleModalAction(false));
  };

  const handleChange = (value) => {
    setStartDate(value);
  };

  const updateSchedule = () => {
    const data = {
      ...scheduleData,
      date: moment(startDate).format('DD/MM/YYYY HH:mm')
    };

    updateScheduleClient(data)
      .then((resp) => {
        dispatch(updateScheduleAction(data));
        dispatch(updateScheduleModalAction(false));
      });
  };

  const deleteSchedule = async () => {
    deleteScheduleClient(scheduleData.id).then((resp) => {
      dispatch(deleteScheduleAction(scheduleData));
      dispatch(updateScheduleModalAction(false));
    })
  };

  return (
    <div className='overlay'>
      <aside className='modal-schedules'>
        <CloseIcon className='modal-close' onClick={() => closeConfirmationModal()} />
        <h3 className='modal-title'>Detalhes do agendamento</h3>
        <div className='modal-schedule'>
          <div className='modal-schedule-patients'>
            <label htmlFor='patients'>Paciente</label>
            <select name='patients' id='patients'>
              {
                patientsList.map((patient: any, index: number) => {
                  return <option value={patient.patientName} key={index}>{patient.patientName}</option>;
                })
              }
            </select>
          </div>
          <div className='modal-schedule-date'>
            <p>Data</p>
            <ScheduleDateSelector startDate={startDate} minDate={new Date()} handleChange={handleChange} />
          </div>
        </div>
        <div className='modal-buttons'>
          <button onClick={() => updateSchedule()}>Salvar</button>
          <button onClick={() => deleteSchedule()}>Excluir</button>
        </div>
      </aside>
    </div>
  );
}

UpdateScheduleModal.propTypes = {
  patientsList: PropTypes.array.isRequired,
  scheduleData: PropTypes.object.isRequired
}

export default UpdateScheduleModal;
