import React from 'react';
import { render } from '@testing-library/react';
import PatientsList from './PatientsList';

const patientsData = [
  {
    name: 'Pikachu',
    gender: 'no gender',
    birthDate: 'unknown birthdate',
    telephone: 'no telephone'
  }
];

test('renders patients header table', () => {
  const { getByText } = render(<PatientsList patientsList={patientsData} />);

  const nameHeader = getByText(/nome/i);
  const birthDateHeader = getByText(/data de nascimento/i);
  const genreHeader = getByText(/sexo/i);
  const telephoneHeader = getByText(/telefone/i);

  expect(nameHeader).toBeInTheDocument();
  expect(birthDateHeader).toBeInTheDocument();
  expect(genreHeader).toBeInTheDocument();
  expect(telephoneHeader).toBeInTheDocument();
});

test('renders patients data', () => {
  const { getByText } = render(<PatientsList patientsList={patientsData} />);

  const patientName = getByText(/pikachu/i);
  const patientBirthDate = getByText(/no gender/i);
  const patientGenre = getByText(/unknown birthdate/i);
  const patientTelephone = getByText(/no telephone/i);

  expect(patientName).toBeInTheDocument();
  expect(patientBirthDate).toBeInTheDocument();
  expect(patientGenre).toBeInTheDocument();
  expect(patientTelephone).toBeInTheDocument();
});