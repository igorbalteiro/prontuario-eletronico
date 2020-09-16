import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import 'react-datepicker/dist/react-datepicker.css';

import { newSchedule as newScheduleAction } from '../../actions/index';
import { ReactComponent as CloseIcon } from './close.svg';
import './ScheduleModal.css';

const ScheduleModal = ({ patientsList }) => {
  registerLocale('pt', pt);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  const closeConfirmationModal = () => {
    dispatch(newScheduleAction(false));
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
                  return <option value={patient.patientName} key={index}>{patient.patientName}</option>;
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
          <button onClick={() => closeConfirmationModal()}>Criar</button>
        </div>
      </aside>
    </div>
  );
}

ScheduleModal.propTypes = {
  patientsList: PropTypes.array.isRequired
}

export default ScheduleModal;
