import React from 'react';
import { createStore } from 'redux';
import { fireEvent } from '@testing-library/react'
import { render } from './test-utils';
import App from './App';

const store = createStore(() => ({
  displayPatientDetails: false,
  patientDetailsData: {'name': 'Pikachu'}
}));


test('renders app title', () => {
  const { getByText } = render(<App />, { store });

  const appTitle = getByText(/prontomed/i);

  expect(appTitle).toBeInTheDocument();
});

test('renders patients link', () => {
  const { getAllByText } = render(<App />, { store });

  const patientsLink = getAllByText(/pacientes/i);

  expect(patientsLink.length).toBe(2);
});

test('renders schedules link', () => {
  const { getByText } = render(<App />, { store });

  const schedulesLink = getByText(/agendamentos/i);

  expect(schedulesLink).toBeInTheDocument();
});

test('renders patients component', () => {
  const { getByText } = render(<App />, { store });

  const patientsComponent = getByText(/novo paciente/i);

  expect(patientsComponent).toBeInTheDocument();
});

test('renders schedules component', () => {
  const { getByText } = render(<App />, { store });

  fireEvent.click(getByText(/agendamentos/i));

  const schedulesComponent = getByText(/novo agendamento/i);

  expect(schedulesComponent).toBeInTheDocument();
});

test('renders patient details component when click on patient', () => {
  const { getByText } = render(<App />, { store });

  fireEvent.click(getByText(/person a/i));

  const patientComponent = getByText(/paciente person a/i);

  expect(patientComponent).toBeInTheDocument();
});

test('renders patients component after clicking in navbar', () => {
  const { getByText } = render(<App />, { store });

  fireEvent.click(getByText(/person a/i));
  fireEvent.click(getByText(/pacientes/i));

  const patientsComponent = getByText(/novo paciente/i);

  expect(patientsComponent).toBeInTheDocument();
});

test('renders schedule component after entering in patient details', () => {
  const { getByText } = render(<App />, { store });

  fireEvent.click(getByText(/person a/i));
  fireEvent.click(getByText(/agendamentos/i));

  const patientsComponent = getByText(/novo agendamento/i);

  expect(patientsComponent).toBeInTheDocument();
});
