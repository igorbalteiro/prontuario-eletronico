import React from 'react';
import PropTypes from 'prop-types';
import './AnnotationList.css';

const AnnotationList = ({ annotationsList }) => {
  return (
    <table className='Annotations-list-table'>
      <thead>
        <tr>
          <th>Data da consulta</th>
          <th>Atendimento</th>
        </tr>
      </thead>
      <tbody>
        {annotationsList.map((annotation: any, index: number) => (
          <tr key={index}>
            <td>{annotation.date}</td>
            <td>{annotation.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

AnnotationList.propTypes = {
  annotationsList: PropTypes.array.isRequired
}

export default AnnotationList;
