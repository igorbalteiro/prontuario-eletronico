import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  const { getByText } = render(<App />);

  const appTitle = getByText(/prontomed/i);

  expect(appTitle).toBeInTheDocument();
});

test('renders patients link', () => {
  const { getAllByText } = render(<App />);

  const patientsLink = getAllByText(/pacientes/i);

  expect(patientsLink.length).toBe(2);
});

test('renders schedules link', () => {
  const { getByText } = render(<App />);

  const schedulesLink = getByText(/agendamentos/i);

  expect(schedulesLink).toBeInTheDocument();
});

test('renders patients component', () => {
  const { getByText } = render(<App />);

  const patientsComponent = getByText(/novo paciente/i);

  expect(patientsComponent).toBeInTheDocument();
});
