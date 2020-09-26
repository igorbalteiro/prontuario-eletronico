import React from 'react';
import { createStore } from 'redux';
import { render } from '../../../test-utils';
import UpdatePatientModal from './UpdatePatientModal';

import { initialState } from '../../../reducers/index';

const store = createStore(() => (initialState));

const patientData = {
  id: 1,
  name: 'Pikachu',
  telephone: '21999999999',
  birthDate: '01/01/1970',
  gender: 'masculino',
  height: 173,
  weight: 80
};

test('renders patient modal title', () => {
  const { getByText } = render(<UpdatePatientModal patientData={patientData} />, { store });

  const scheduleModalTitle = getByText(/atualizar paciente/i);

  expect(scheduleModalTitle).toBeInTheDocument();
});

test('renders close icon', () => {
  const { container } = render(<UpdatePatientModal patientData={patientData} />, { store });

  const closeIcon = container.querySelector('svg');

  expect(closeIcon).toBeInTheDocument();
});

test('renders cancel update patient button', () => {
  const { getByText } = render(<UpdatePatientModal patientData={patientData} />, { store });

  const createPatientButton = getByText(/cancelar/i);

  expect(createPatientButton).toBeInTheDocument();
});

test('renders create new patient button', () => {
  const { getByText } = render(<UpdatePatientModal patientData={patientData} />, { store });

  const createPatientButton = getByText(/salvar/i);

  expect(createPatientButton).toBeInTheDocument();
});
