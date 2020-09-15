import React from 'react';
import PropTypes from 'prop-types';
import './Patient.css';

import AnnotationList from '../AnnotationList/AnnotationList';

const Patient = ({ patientDetails }) => {
  const displayAnnotationsList = () => {
    return patientDetails.annotations.length > 0
      ? <AnnotationList annotationsList={patientDetails.annotations} />
      : null
  }

  return (
    <section className='Patient'>
      <div className='Patient-header'>
        <h3 className='Patient-header-title'>Paciente {patientDetails.name}</h3>
        <div className='Patient-header-buttons'>
          <button>Editar cadastro</button>
          <button>Excluir cadastro</button>
        </div>
      </div>
      <button className='Patient-insert-annotation'>Inserir anotações</button>
      {displayAnnotationsList()}
    </section>
  );
}

Patient.propTypes = {
  patientDetails: PropTypes.object.isRequired
}

export default Patient;
