import React from 'react';
import PropTypes from 'prop-types';
import './Patients.css';

import PatientsList from '../PatientsList/PatientsList';

const Patients = ({ patientsListData }) => {
  const displayPatientsList = () => {
    return patientsListData.length > 0
      ? <PatientsList patientsList={patientsListData} />
      : <p className='Patients-empty'>Nenhum paciente cadastrado</p>
  }

  return (
    <section className='Patients'>
      <div className='Patients-header'>
        <h3 className='Patients-header-title'>Pacientes</h3>
        <button className='Patients-header-button'>Novo Paciente</button>
      </div>
      {displayPatientsList()}
    </section>
  );
}

Patients.propTypes = {
  patientsListData: PropTypes.array.isRequired
}

export default Patients;
