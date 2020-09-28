import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../PatientModal.css'
import { ReactComponent as CloseIcon } from '../../close.svg';

import DateSelector from '../DateSelector/DateSelector';

import {
  updatePatientModal as updatePatientModalAction,
  updatePatient as updatePatientAction
} from '../../../../actions/index';

import { updatePatient as updatePatientClient } from '../../../../client/index';

const UpdatePatientModal = ({patientData}) => {
  const dispatch = useDispatch();

  const dateParts = patientData.birthDate.split('/');
  const [startDate, setStartDate] = useState(new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]));
  const [name, setName] = useState(patientData.name);
  const [telephone, setTelephone] = useState(patientData.telephone);
  const [weight, setWeight] = useState(patientData.weight);
  const [height, setHeight] = useState(patientData.height);
  const [gender, setGender] = useState(patientData.gender);

  const closeConfirmationModal = () => {
    dispatch(updatePatientModalAction(false));
  };

  const handleChange = (value) => {
    setStartDate(value);
  };

  const updatePatient = () => {
    const date = startDate.toISOString().slice(0,10).split('-');

    const data = {
      name: name,
      telephone: telephone,
      birthDate: `${date[2]}/${date[1]}/${date[0]}`,
      gender: gender,
      height: height,
      weight: weight,
      id: patientData.id
    };

    updatePatientClient(data).then((resp) => {
      dispatch(updatePatientAction(data));
      window.location.reload();
    });

    dispatch(updatePatientModalAction(false));
  };

  return (
    <div className='overlay'>
      <aside className='modal'>
        <CloseIcon className='modal-close' onClick={() => closeConfirmationModal()} />
        <h3 className='modal-title'>Atualizar Paciente</h3>
        <div className='modal-patient'>
          <label htmlFor='name'>Nome</label>
          <input type='text' id='name' name='name' onChange={(e) => setName(e.target.value)} value={name} />
          <label htmlFor='telephone'>Telefone</label>
          <input type='text' id='telephone' name='telephone' onChange={(e) => setTelephone(e.target.value)} value={telephone} />
          <label htmlFor='gender'>Peso (kg)</label>
          <input type='text' id='gender' name='gender' onChange={(e) => setWeight(+e.target.value)} value={weight} />
          <label htmlFor='height'>Altura (cm)</label>
          <input type='text' id='height' name='height' onChange={(e) => setHeight(+e.target.value)} value={height} />
          <label htmlFor='gender'>Sexo</label>
          <select id='gender' onChange={(e) => setGender(e.target.value)}>
            <option value='masculino'>Masculino</option>
            <option value='feminino'>Feminino</option>
            <option value='outro'>Prefiro não informar</option>
          </select>
          <label htmlFor='birthDate'>Data de nascimento</label>
          <DateSelector startDate={startDate} handleChange={handleChange} />
        </div>
        <div className='modal-buttons'>
          <button onClick={() => closeConfirmationModal()}>Cancelar</button>
          <button onClick={() => updatePatient()}>Salvar</button>
        </div>
      </aside>
    </div>
  )
};

UpdatePatientModal.propTypes = {
  patientData: PropTypes.object.isRequired
}

export default UpdatePatientModal;