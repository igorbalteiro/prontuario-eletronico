import React from 'react';
import PropTypes from 'prop-types';
import './PatientsList.css';

const PatientsList = ({ patientsList }) => {
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
          <tr key={index}>
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
