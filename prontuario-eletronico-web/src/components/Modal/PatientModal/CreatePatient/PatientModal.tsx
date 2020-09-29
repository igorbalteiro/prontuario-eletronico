import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../PatientModal.css'
import { ReactComponent as CloseIcon } from '../../close.svg';

import DateSelector from '../DateSelector/DateSelector';

import {
  createPatientModal as createPatientModalAction,
  patientsData as patientsDataAction
} from '../../../../actions/index';

import { createPatient as createPatientClient } from '../../../../client/index';

const PatientModal = () => {
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [gender, setGender] = useState('Masculino');

  const closeConfirmationModal = () => {
    dispatch(createPatientModalAction(false));
  };

  const handleChange = (value) => {
    setStartDate(value);
  };

  const createPatient = () => {
    const date = startDate.toISOString().slice(0,10).split('-');

    const data = {
      name: name,
      telephone: telephone,
      birthDate: `${date[2]}/${date[1]}/${date[0]}`,
      gender: gender,
      height: height,
      weight: weight
    };

    createPatientClient(data).then((resp) => {
      dispatch(patientsDataAction(data));
    });

    dispatch(createPatientModalAction(false));
  };

  return (
    <div className='overlay'>
      <aside className='modal'>
        <CloseIcon className='modal-close' onClick={() => closeConfirmationModal()} />
        <h3 className='modal-title'>Cadastrar Paciente</h3>
        <div className='modal-patient'>
          <label htmlFor='name'>Nome</label>
          <input type='text' id='name' name='name' onChange={(e) => setName(e.target.value)} />
          <label htmlFor='telephone'>Telefone</label>
          <input type='text' id='telephone' name='telephone' onChange={(e) => setTelephone(e.target.value)} />
          <label htmlFor='gender'>Peso (kg)</label>
          <input type='text' id='gender' name='gender' onChange={(e) => setWeight(+e.target.value)} />
          <label htmlFor='height'>Altura (cm)</label>
          <input type='text' id='height' name='height' onChange={(e) => setHeight(+e.target.value)} />
          <label htmlFor='gender'>Sexo</label>
          <select id='gender' onChange={(e) => setGender(e.target.value)}>
            <option value='Masculino'>Masculino</option>
            <option value='Feminino'>Feminino</option>
            <option value='Não informado'>Prefiro não informar</option>
          </select>
          <label htmlFor='birthDate'>Data de nascimento</label>
          <DateSelector startDate={startDate} handleChange={handleChange} />
        </div>
        <div className='modal-buttons'>
          <button onClick={() => closeConfirmationModal()}>Cancelar</button>
          <button onClick={() => createPatient()}>Criar</button>
        </div>
      </aside>
    </div>
  )
};

export default PatientModal;