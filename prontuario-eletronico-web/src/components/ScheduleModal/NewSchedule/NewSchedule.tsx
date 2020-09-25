import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import {
  createScheduleModal as createScheduleModalAction,
  schedulesData as schedulesDataAction
} from '../../../actions/index';
import { ReactComponent as CloseIcon } from '../close.svg';
import '../ScheduleModal.css';

import { createSchedule as createScheduleClient } from '../../../client/index';

const NewScheduleModal = ({ patientsList }) => {
  registerLocale('pt', pt);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  const closeConfirmationModal = () => {
    dispatch(createScheduleModalAction(false));
  };

  const createSchedule = async () => {
    const date = startDate.toISOString().slice(0,10).split('-');

    const data = {
      patientName: patientsList[0].name,
      patientID: patientsList[0].id,
      date: `${date[2]}/${date[1]}/${date[0]}`,
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
      <aside className='modal'>
        <CloseIcon className='modal-close' onClick={() => closeConfirmationModal()} />
        <h3 className='modal-title'>Novo agendamento</h3>
        <div className='modal-schedule'>
          <div className='modal-schedule-patients'>
            <label htmlFor='patients'>Paciente</label>
            <select name='patients' id='patients'>
              {
                patientsList.map((patient: any, index: number) => {
                  return <option value={patient.name} key={index}>{patient.name}</option>;
                })
              }
            </select>
          </div>
          <div className='modal-schedule-date'>
            <p>Data</p>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              dateFormat='dd/MM/yyyy'
              minDate={startDate}
              locale='pt'
              className='date-picker'
            />
          </div>
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
