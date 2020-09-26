import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Patients.css';

import PatientsList from '../PatientsList/PatientsList';
import PatientModal from '../PatientModal/PatientModal';

import {
  createPatientModal as createPatientModalAction
} from '../../actions/index';

const Patients = ({ patientsListData }) => {
  const dispatch = useDispatch();

  const createPatientModal = useSelector((state) => state.createPatientModal);

  const displayPatientsList = () => {
    return patientsListData.length > 0
      ? <PatientsList patientsList={patientsListData} />
      : <p className='Patients-empty'>Nenhum paciente cadastrado</p>
  }

  const displayCreatePatientModal = () => {
    return (createPatientModal)
      ? <PatientModal />
      : null;
  };

  return (
    <section className='Patients'>
      <div className='Patients-header'>
        <h3 className='Patients-header-title'>Pacientes</h3>
        <button className='Patients-header-button'onClick={() => dispatch(createPatientModalAction(true))}>Novo Paciente</button>
      </div>
      {displayPatientsList()}
      {displayCreatePatientModal()}
    </section>
  );
}

Patients.propTypes = {
  patientsListData: PropTypes.array.isRequired
}

export default Patients;
