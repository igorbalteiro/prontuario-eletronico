import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import 'react-datepicker/dist/react-datepicker.css';

import { updateSchedule as updateScheduleAction } from '../../../actions/index';
import { ReactComponent as CloseIcon } from '../close.svg';
import '../ScheduleModal.css';

const UpdateScheduleModal = ({ patientsList, scheduleDate }) => {
  registerLocale('pt', pt);
  const dispatch = useDispatch();

  const dateParts = scheduleDate.split('/');
  const [startDate, setStartDate] = useState(new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]));

  const closeConfirmationModal = () => {
    dispatch(updateScheduleAction(false));
  };

  return (
    <div className='overlay'>
      <aside className='modal'>
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
          <button onClick={() => closeConfirmationModal()}>Salvar</button>
          <button onClick={() => closeConfirmationModal()}>Excluir</button>
        </div>
      </aside>
    </div>
  );
}

UpdateScheduleModal.propTypes = {
  patientsList: PropTypes.array.isRequired,
  scheduleDate: PropTypes.string.isRequired
}

export default UpdateScheduleModal;
