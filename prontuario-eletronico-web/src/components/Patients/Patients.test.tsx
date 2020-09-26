import React from 'react';
import { createStore } from 'redux';
import { fireEvent } from '@testing-library/react';
import { render } from '../../test-utils';
import Patients from './Patients';

import { initialState } from '../../reducers/index';

const store = createStore(() => (initialState));

const patientsData = [
  {
    name: 'Pikachu',
    gender: 'no gender',
    birthDate: 'unknown birthdate',
    telephone: 'no telephone',
    height: 1.68,
    weight: 90,
    annotations: [
      {
        date: '01/01/2020',
        description: 'Some description'
      },
      {
        date: '11/01/2020',
        description: 'Other description'
      }
    ]
  }
];

test('renders patients section title', () => {
  const { getByText } = render(<Patients patientsListData={patientsData} />, { store });

  const patientsTitle = getByText(/pacientes/i);

  expect(patientsTitle).toBeInTheDocument();
});

test('renders add patient button', () => {
  const { getByText } = render(<Patients patientsListData={patientsData} />);

  const patientButton = getByText(/novo paciente/i);

  expect(patientButton).toBeInTheDocument();
});

test('renders patients list', () => {
  const { getByText } = render(<Patients patientsListData={patientsData} />);

  const patientName = getByText(/Pikachu/i);

  expect(patientName).toBeInTheDocument();
});

test('not renders patients list', () => {
  const { container, getByText } = render(<Patients patientsListData={[]} />);

  const partientsList = container.querySelector('table');
  const noPatientData = getByText(/nenhum paciente cadastrado/i);

  expect(partientsList).not.toBeInTheDocument();
  expect(noPatientData).toBeInTheDocument();
});

test('displays create patient modal when click create button', () => {
  const { getByText } = render(<Patients patientsListData={patientsData} />);

  fireEvent.click(getByText(/novo paciente/i));
  const createPatientModal = getByText(/cadastrar paciente/i);

  expect(createPatientModal).toBeInTheDocument();
});
