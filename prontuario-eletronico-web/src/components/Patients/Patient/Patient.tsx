import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Patient.css';

import AnnotationList from './AnnotationList/AnnotationList';
import Annotation from './Annotation/Annotation';
import {
  displayAnnotation as displayAnnotationAction,
  displayPatientDetails as  displayPatientDetailsAction,
  deletePatient as deletePatientAction,
  updatePatientModal as updatePatientModalAction
} from '../../../actions/index';
import { deletePatient as deletePatientClient } from '../../../client';
import UpdatePatientModal from '../../PatientModal/updatPatient/UpdatePatientModal';

const Patient = ({ patientDetails }) => {
  const dispatch = useDispatch();
  const displayAnnotation = useSelector((state) => state.displayAnnotation);
  const updatePatientModal = useSelector((state) => state.updatePatientModal);

  const displayAnnotationsList = () => {
    return (patientDetails.schedules && patientDetails.schedules.length > 0)
      ? <AnnotationList annotationsList={patientDetails.schedules} />
      : <p className='Patient-empty'>Nenhuma consulta efetuada</p>
  }

  const displayAnnotationModal = () => {
    return (displayAnnotation)
      ? <Annotation annotationsList={patientDetails.schedules} />
      : null;
  };

  const deletePatient = () => {
    deletePatientClient(patientDetails.id).then((resp) => {
      dispatch(deletePatientAction(patientDetails));
      dispatch(displayPatientDetailsAction(false));
      window.location.reload();
    });
  };

  const displayUpdatePatientModal = () => {
    return (updatePatientModal)
      ? <UpdatePatientModal patientData={patientDetails} />
      : null;
  };

  return (
    <section className='Patient'>
      <div className='Patient-header'>
        <h3 className='Patient-header-title'>Paciente {patientDetails.name}</h3>
        <div className='Patient-header-buttons'>
          <button onClick={() => dispatch(updatePatientModalAction(true))}>Editar cadastro</button>
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
      {displayUpdatePatientModal()}
    </section>
  );
}

Patient.propTypes = {
  patientDetails: PropTypes.object.isRequired
}

export default Patient;
