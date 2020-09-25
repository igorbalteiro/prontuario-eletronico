import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Patient.css';

import AnnotationList from '../AnnotationList/AnnotationList';
import Annotation from '../Annotation/Annotation';
import {
  displayAnnotation as displayAnnotationAction,
  displayPatientDetails as  displayPatientDetailsAction,
  deletePatient as deletePatientAction
} from '../../actions/index';
import { deletePatient as deletePatientClient } from '../../client';

const Patient = ({ patientDetails }) => {
  const dispatch = useDispatch();
  const displayAnnotation = useSelector((state) => state.displayAnnotation);

  const displayAnnotationsList = () => {
    return (patientDetails.annotations && patientDetails.annotations.length > 0)
      ? <AnnotationList annotationsList={patientDetails.annotations} />
      : <p className='Patient-empty'>Nenhuma consulta efetuada</p>
  }

  const displayAnnotationModal = () => {
    return (displayAnnotation)
      ? <Annotation annotationsList={patientDetails.annotations} />
      : null;
  };

  const deletePatient = () => {
    console.log(patientDetails)
    deletePatientClient(patientDetails.id).then((resp) => {
      dispatch(deletePatientAction(patientDetails));
      dispatch(displayPatientDetailsAction(false));
      window.location.reload();
    });
  };

  return (
    <section className='Patient'>
      <div className='Patient-header'>
        <h3 className='Patient-header-title'>Paciente {patientDetails.name}</h3>
        <div className='Patient-header-buttons'>
          <button>Editar cadastro</button>
          <button onClick={() => deletePatient()}>Excluir cadastro</button>
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
