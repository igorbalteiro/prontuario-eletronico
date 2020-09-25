import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './PatientsList.css';
import {
  displayPatientDetails as  displayPatientDetailsAction,
  selectedPatient as selectedPatientAction
} from '../../actions/index';

const PatientsList = ({ patientsList }) => {
  const dispatch = useDispatch();

  const displayPatientDetails = (patientData) => {
    dispatch(selectedPatientAction(patientData));
    dispatch(displayPatientDetailsAction(true));
  };

  return (
    <table className='Patients-list-table'>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data de Nascimento</th>
          <th>Sexo</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        {patientsList.map((patient: any, index: number) => (
          <tr key={index} onClick={() => displayPatientDetails(patient)}>
            <td>{patient.name}</td>
            <td>{patient.birthDate}</td>
            <td>{patient.gender}</td>
            <td>{patient.telephone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

PatientsList.propTypes = {
  patientsList: PropTypes.array.isRequired
}

export default PatientsList;
