import React from 'react';
import { createStore } from 'redux';
import { fireEvent } from '@testing-library/react';
import { render } from '../../test-utils';
import Patient from './Patient';

import { initialState } from '../../reducers/index';

const store = createStore(() => (initialState));

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
  const { getByText } = render(<Patient patientDetails={patientsDetailsData} />, { store });

  const editProfileButton = getByText(/editar cadastro/i);

  expect(editProfileButton).toBeInTheDocument();
});

test('renders remove profile button', () => {
  const { getByText } = render(<Patient patientDetails={patientsDetailsData} />, { store });

  const removeProfileButton = getByText(/excluir cadastro/i);

  expect(removeProfileButton).toBeInTheDocument();
});

test('renders patient details data', () => {
  const { getByText } = render(<Patient patientDetails={patientsDetailsData} />, { store });

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
  const { getByText } = render(<Patient patientDetails={patientsDetailsData} />, { store });

  const insertAnnotationButton = getByText(/inserir anotações/i);

  expect(insertAnnotationButton).toBeInTheDocument();
});

test('renders annotations list', () => {
  const { getByText } = render(<Patient patientDetails={patientsDetailsData} />, { store });

  const annotationText = getByText(/some description/i);

  expect(annotationText).toBeInTheDocument();
});

test('not renders annotations list', () => {
  const { container, getByText } = render(<Patient patientDetails={{ ...patientsDetailsData, annotations: [] }} />, { store });

  const annotationsList = container.querySelector('table');
  const noPatientData = getByText(/nenhuma consulta efetuada/i);

  expect(annotationsList).not.toBeInTheDocument();
  expect(noPatientData).toBeInTheDocument();
});

test('renders annotation modal when clicking in insert annotations button', () => {
  const { getByText } = render(<Patient patientDetails={patientsDetailsData} />, { store });

  fireEvent.click(getByText(/inserir anotações/i));
  const annotationModalTitle = getByText(/anotações do atendimento/i);

  expect(annotationModalTitle).toBeInTheDocument();
});
