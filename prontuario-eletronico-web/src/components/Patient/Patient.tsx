import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Patient.css';

import AnnotationList from '../AnnotationList/AnnotationList';
import Annotation from '../Annotation/Annotation';
import { displayAnnotation as displayAnnotationAction } from '../../actions/index';

const Patient = ({ patientDetails }) => {
  const dispatch = useDispatch();
  const displayAnnotation = useSelector((state) => state.displayAnnotation);

  const displayAnnotationsList = () => {
    return patientDetails.annotations.length > 0
      ? <AnnotationList annotationsList={patientDetails.annotations} />
      : null
  }

  const displayAnnotationModal = () => {
    return (displayAnnotation)
      ? <Annotation annotationsList={patientDetails.annotations} />
      : null;
  };

  return (
    <section className='Patient'>
      <div className='Patient-header'>
        <h3 className='Patient-header-title'>Paciente {patientDetails.name}</h3>
        <div className='Patient-header-buttons'>
          <button>Editar cadastro</button>
          <button>Excluir cadastro</button>
        </div>
      </div>
      <article className='Patient-data'>
        <p>Data de nascimento: {patientDetails.birthDate}</p>
        <p>Altura: {patientDetails.height}</p>
        <p>Sexo: {patientDetails.gender}</p>
        <p>Peso: {patientDetails.weight} kg</p>
        <p>Telefone: {patientDetails.telephone}</p>
      </article>
      <button className='Patient-insert-annotation' onClick={() => dispatch(displayAnnotationAction(true))}>Inserir anotações</button>
      {displayAnnotationsList()}
      {displayAnnotationModal()}
    </section>
  );
}

Patient.propTypes = {
  patientDetails: PropTypes.object.isRequired
}

export default Patient;
