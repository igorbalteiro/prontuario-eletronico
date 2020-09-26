import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  displayAnnotation as displayAnnotationAction,
  updateSchedule as updateScheduleAction
} from '../../actions/index';
import { ReactComponent as CloseIcon } from './close.svg';
import './Annotation.css';

import {
  updateSchedule as updateScheduleClient
} from '../../client/index';

const NewScheduleModal = ({ annotationsList }) => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(annotationsList[0].description);
  const [patientName, setPatientName] = useState(annotationsList[0].patientName);
  const [date, setDate] = useState(annotationsList[0].date);
  const [patientID, setPatientID] = useState(annotationsList[0].patientID);
  const [id, setId] = useState(annotationsList[0].id);

  const closeConfirmationModal = () => {
    dispatch(displayAnnotationAction(false));
  };

  const selectedOption = (event) => {
    const selectedAnnotation = annotationsList.filter((annotation: any) => annotation.date === event.target.value);

    setInputValue(selectedAnnotation[0].description);
    setPatientName(selectedAnnotation[0].patientName);
    setDate(selectedAnnotation[0].date);
    setPatientID(selectedAnnotation[0].patientID);
    setId(selectedAnnotation[0].id);
  };

  const updateAnnotation = () => {
    const data = {
      patientName: patientName,
      date: date,
      patientID: patientID,
      description: inputValue,
      id: id
    };

    updateScheduleClient(data)
      .then((resp) => {
        dispatch(updateScheduleAction(data));
        dispatch(displayAnnotationAction(false));
        window.location.reload();
      });
  };

  return (
    <div className='overlay'>
      <aside className='modal'>
        <CloseIcon className='modal-close' onClick={() => closeConfirmationModal()} />
        <h3 className='modal-title'>Anotações do Atendimento</h3>
        <div className='modal-annotation'>
          <div className='modal-annotation-dates'>
            <label htmlFor='dates'>Data da consulta</label>
            <select name='dates' id='dates' onChange={(e) => selectedOption(e)}>
              {
                annotationsList.map((annotation: any, index: number) => {
                  return <option value={annotation.date} key={index}>{annotation.date}</option>;
                })
              }
            </select>
          </div>
          <div className='modal-annotation-text'>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </div>
        </div>
        <div className='modal-buttons'>
          <button onClick={() => closeConfirmationModal()}>Cancelar</button>
          <button onClick={() => updateAnnotation()}>Salvar</button>
        </div>
      </aside>
    </div>
  );
}

NewScheduleModal.propTypes = {
  annotationsList: PropTypes.array.isRequired
}

export default NewScheduleModal;
