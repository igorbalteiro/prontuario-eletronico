import React from 'react';
import { render } from '@testing-library/react';
import Patient from './Patient';

const patientsDetailsData = {
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
};

test('renders patient name in section title', () => {
  const { getByText } = render(<Patient patientDetails={patientsDetailsData} />);

  const patientName = getByText(/paciente pikachu/i);

  expect(patientName).toBeInTheDocument();
});

test('renders edit profile button', () => {
  const { getByText } = render(<Patient patientDetails={patientsDetailsData} />);

  const editProfileButton = getByText(/editar cadastro/i);

  expect(editProfileButton).toBeInTheDocument();
});

test('renders remove profile button', () => {
  const { getByText } = render(<Patient patientDetails={patientsDetailsData} />);

  const removeProfileButton = getByText(/excluir cadastro/i);

  expect(removeProfileButton).toBeInTheDocument();
});

test('renders patient details data', () => {
  const { getByText } = render(<Patient patientDetails={patientsDetailsData} />);

  const birthDateText = getByText(/data de nascimento/i);
  const heightText = getByText(/altura/i);
  const genderText = getByText(/sexo/i);
  const weightText = getByText(/peso/i);
  const telephoneText = getByText(/telefone/i);

  expect(birthDateText).toBeInTheDocument();
  expect(heightText).toBeInTheDocument();
  expect(genderText).toBeInTheDocument();
  expect(weightText).toBeInTheDocument();
  expect(telephoneText).toBeInTheDocument();
});

test('renders insert annotation button', () => {
  const { getByText } = render(<Patient patientDetails={patientsDetailsData} />);

  const insertAnnotationButton = getByText(/inserir anotações/i);

  expect(insertAnnotationButton).toBeInTheDocument();
});

test('renders annotations list', () => {
  const { getByText } = render(<Patient patientDetails={patientsDetailsData} />);

  const annotationText = getByText(/some description/i);

  expect(annotationText).toBeInTheDocument();
});

test('not renders annotations list', () => {
  const { container } = render(<Patient patientDetails={{ ...patientsDetailsData, annotations: [] }} />);

  const annotationsList = container.querySelector('table');

  expect(annotationsList).not.toBeInTheDocument();
});
