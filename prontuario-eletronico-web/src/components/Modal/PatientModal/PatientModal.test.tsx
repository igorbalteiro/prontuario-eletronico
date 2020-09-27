import React from 'react';
import { createStore } from 'redux';
import { render } from '../../../test-utils';
import PatientModal from './PatientModal';

import { initialState } from '../../../reducers/index';

const store = createStore(() => (initialState));

const patientsData = [
  { name: 'Pikachu'},
  { name: 'Raichu'}
];

test('renders patient modal title', () => {
  const { getByText } = render(<PatientModal />, { store });

  const scheduleModalTitle = getByText(/cadastrar paciente/i);

  expect(scheduleModalTitle).toBeInTheDocument();
});

test('renders close icon', () => {
  const { container } = render(<PatientModal />, { store });

  const closeIcon = container.querySelector('svg');

  expect(closeIcon).toBeInTheDocument();
});

test('renders cancel new schedule button', () => {
  const { getByText } = render(<PatientModal />, { store });

  const createScheduleButton = getByText(/cancelar/i);

  expect(createScheduleButton).toBeInTheDocument();
});

test('renders create new schedule button', () => {
  const { getByText } = render(<PatientModal />, { store });

  const createScheduleButton = getByText(/criar/i);

  expect(createScheduleButton).toBeInTheDocument();
});
