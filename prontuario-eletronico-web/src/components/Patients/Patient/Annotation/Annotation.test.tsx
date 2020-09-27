import React from 'react';
import { createStore } from 'redux';
import { fireEvent } from '@testing-library/react';
import { render } from '../../../../test-utils';
import Annotation from './Annotation';

import { initialState } from '../../../../reducers/index';

const store = createStore(() => (initialState));

const annotationsData = [
  { date: '01/01/1970', description: 'Some description'},
  { date: '01/01/1980', description: 'Other description'},
];

test('renders annotation modal title', () => {
  const { getByText } = render(<Annotation annotationsList={annotationsData} />, { store });

  const scheduleModalTitle = getByText(/anotações do atendimento/i);

  expect(scheduleModalTitle).toBeInTheDocument();
});

test('renders close icon', () => {
  const { container } = render(<Annotation annotationsList={annotationsData} />, { store });

  const closeIcon = container.querySelector('svg');

  expect(closeIcon).toBeInTheDocument();
});

test('renders cancel annotation button', () => {
  const { getByText } = render(<Annotation annotationsList={annotationsData} />, { store });

  const createScheduleButton = getByText(/cancelar/i);

  expect(createScheduleButton).toBeInTheDocument();
});

test('renders save annotation button', () => {
  const { getByText } = render(<Annotation annotationsList={annotationsData} />, { store });

  const createScheduleButton = getByText(/salvar/i);

  expect(createScheduleButton).toBeInTheDocument();
});

test('renders select date list', () => {
  const { container } = render(<Annotation annotationsList={annotationsData} />, { store });

  const inputTag = container.querySelector('option');;

  expect(inputTag.value).toEqual('01/01/1970');
});

test('renders input text', () => {
  const { container } = render(<Annotation annotationsList={annotationsData} />, { store });

  const inputTag = container.querySelector('input');

  expect(inputTag.value).toEqual('Some description');
});

test('changes input text when other date option is selected', () => {
  const { container } = render(<Annotation annotationsList={annotationsData} />, { store });

  fireEvent.change(container.querySelector('select'), { target: { value: '01/01/1980' } });

  const inputTag = container.querySelector('input');

  expect(inputTag.value).toEqual('Other description');
});
