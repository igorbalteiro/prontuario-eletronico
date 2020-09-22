import React from 'react';
import { createStore } from 'redux';
import { render } from '../../test-utils';
import Patients from './Patients';

const store = createStore(() => ({
  displayPatientDetails: false,
  patientDetailsData: {'name': 'Pikachu'},
  displaySchedules: false,
  newSchedule: false,
  updateSchedule: false,
  scheduleDate: '',
  displayAnnotation: false
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
