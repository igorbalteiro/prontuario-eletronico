import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { displayAnnotation as displayAnnotationAction } from '../../actions/index';
import { ReactComponent as CloseIcon } from './close.svg';
import './Annotation.css';

const NewScheduleModal = ({ annotationsList }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(annotationsList[0].description);

  const closeConfirmationModal = () => {
    dispatch(displayAnnotationAction(false));
  };

  const selectedOption = (event) => {
    const selectedAnnotation = annotationsList.filter((annotation: any) => annotation.date === event.target.value);
    setInputValue(selectedAnnotation[0].description);
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
          <button onClick={() => closeConfirmationModal()}>Salvar</button>
        </div>
      </aside>
    </div>
  );
}

NewScheduleModal.propTypes = {
  annotationsList: PropTypes.array.isRequired
}

export default NewScheduleModal;
