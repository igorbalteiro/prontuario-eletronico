import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  createScheduleModal as createScheduleModalAction,
  schedulesData as schedulesDataAction
} from '../../../../actions/index';
import { ReactComponent as CloseIcon } from '../../close.svg';
import '../ScheduleModal.css';

import ScheduleDateSelector from '../ScheduleDateSelector/ScheduleDateSelector';

import { createSchedule as createScheduleClient } from '../../../../client/index';

const NewScheduleModal = ({ patientsList }) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [patientName, setPatientName] = useState(patientsList[0].name);

  const closeConfirmationModal = () => {
    dispatch(createScheduleModalAction(false));
  };

  const handleChange = (value) => {
    setStartDate(value);
  };

  const createSchedule = async () => {
    const data = {
      patientName: patientName,
      patientID: patientsList.filter((patient: any) => patient.name === patientName)[0]['id'],
      date: moment(startDate).format('DD/MM/YYYY HH:mm'),
      description: ''
    };

    createScheduleClient(data)
      .then(({data}) => {
        dispatch(schedulesDataAction(data));
      })
      .catch((error) => {
        console.log(error);
      });

    dispatch(createScheduleModalAction(false));
  };

  return (
    <div className='overlay'>
      <aside className='modal-schedules'>
        <CloseIcon className='modal-close' onClick={() => closeConfirmationModal()} />
        <h3 className='modal-title'>Novo agendamento</h3>
        <div className='modal-schedule'>
          <label htmlFor='patients'>Paciente</label>
          <select name='patients' id='patients' onChange={(e) => setPatientName(e.target.value)}>
            {
              patientsList.map((patient: any, index: number) => {
                return <option value={patient.name} key={index}>{patient.name}</option>;
              })
            }
          </select>
          <label htmlFor='birthDate'>Data</label>
          <ScheduleDateSelector startDate={startDate} minDate={startDate} handleChange={handleChange} />
        </div>
        <div className='modal-buttons'>
          <button onClick={() => closeConfirmationModal()}>Cancelar</button>
          <button onClick={() => createSchedule()}>Criar</button>
        </div>
      </aside>
    </div>
  );
}

NewScheduleModal.propTypes = {
  patientsList: PropTypes.array.isRequired
}

export default NewScheduleModal;
