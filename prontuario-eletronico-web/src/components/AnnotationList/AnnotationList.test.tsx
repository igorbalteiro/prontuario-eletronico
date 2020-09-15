import React from 'react';
import { render } from '@testing-library/react';
import AnnotationList from './AnnotationList';

const annotationsData = [
  {
    date: '01/01/2020',
    description: 'Some description'
  }
];

test('renders annotation header table', () => {
  const { getByText } = render(<AnnotationList annotationsList={annotationsData} />);

  const annotationDateHeader = getByText(/data da consulta/i);
  const descriptionHeader = getByText(/atendimento/i);

  expect(annotationDateHeader).toBeInTheDocument();
  expect(descriptionHeader).toBeInTheDocument();
});

test('renders annotation data', () => {
  const { getByText } = render(<AnnotationList annotationsList={annotationsData} />);

  const annotationDate = getByText('01/01/2020');
  const annotationDescription = getByText(/some description/i);

  expect(annotationDate).toBeInTheDocument();
  expect(annotationDescription).toBeInTheDocument();
});
