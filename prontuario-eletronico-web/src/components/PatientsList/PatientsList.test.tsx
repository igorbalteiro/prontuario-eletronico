import React from 'react';
import { createStore } from 'redux';
import { render } from '../../test-utils';
import PatientsList from './PatientsList';

const store = createStore(() => ({
  displayPatientDetails: false,
  patientDetailsData: {'name': 'Pikachu'},
  displaySchedules: false,
  newSchedule: false,
  updateSchedule: false,
  scheduleDate: ''
}));


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

test('renders patients header table', () => {
  const { getByText } = render(<PatientsList patientsList={patientsData} />, { store });

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
