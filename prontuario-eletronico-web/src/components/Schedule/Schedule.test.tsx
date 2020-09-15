import React from 'react';
import { render } from '@testing-library/react';
import Schedule from './Schedule';

const scheduleData = [
  {
    patientName: 'Pikachu',
    date: '01/01/2020'
  }
];

test('renders schedule section title', () => {
  const { getByText } = render(<Schedule schedulesListData={scheduleData} />);

  const scheduleTitle = getByText(/agendamentos/i);

  expect(scheduleTitle).toBeInTheDocument();
});

test('renders add schedule button', () => {
  const { getByText } = render(<Schedule schedulesListData={scheduleData} />);

  const scheduleButton = getByText(/novo agendamento/i);

  expect(scheduleButton).toBeInTheDocument();
});

test('renders schedules list', () => {
  const { getByText } = render(<Schedule schedulesListData={scheduleData} />);

  const patientName = getByText(/Pikachu/i);

  expect(patientName).toBeInTheDocument();
});

test('not renders patients list', () => {
  const { container } = render(<Schedule schedulesListData={[]} />);

  const patientsList = container.querySelector('table');

  expect(patientsList).not.toBeInTheDocument();
});
