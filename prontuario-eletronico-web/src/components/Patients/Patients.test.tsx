import React from 'react';
import { render } from '@testing-library/react';
import Patients from './Patients';

const patientsData = [
  {
    name: 'Pikachu',
    gender: 'no gender',
    birthDate: 'unknown birthdate',
    telephone: 'no telephone'
  }
];

test('renders patients section title', () => {
  const { getByText } = render(<Patients patientsListData={patientsData} />);

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
  const { container } = render(<Patients patientsListData={[]} />);

  const partientsList = container.querySelector('table');

  expect(partientsList).not.toBeInTheDocument();
});