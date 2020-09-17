import React from 'react';
import { createStore } from 'redux';
import { fireEvent } from '@testing-library/react';
import { render } from '../../test-utils';
import Schedule from './Schedule';

const store = createStore(() => ({
  displayPatientDetails: false,
  patientDetailsData: {'name': 'Pikachu'},
  displaySchedules: false,
  newSchedule: false,
  updateSchedule: false,
  scheduleDate: '',
  displayAnnotation: false
}));

const scheduleData = [
  {
    patientName: 'Pikachu',
    date: '01/01/2020'
  }
];

test('renders schedule section title', () => {
  const { getByText } = render(<Schedule schedulesListData={scheduleData} />, { store });

  const scheduleTitle = getByText(/agendamentos/i);

  expect(scheduleTitle).toBeInTheDocument();
});

test('renders add schedule button', () => {
  const { getByText } = render(<Schedule schedulesListData={scheduleData} />, { store });

  const scheduleButton = getByText(/novo agendamento/i);

  expect(scheduleButton).toBeInTheDocument();
});

test('renders schedules list', () => {
  const { getByText } = render(<Schedule schedulesListData={scheduleData} />, { store });

  const patientName = getByText(/Pikachu/i);

  expect(patientName).toBeInTheDocument();
});

test('not renders patients list', () => {
  const { container } = render(<Schedule schedulesListData={[]} />, { store });

  const patientsList = container.querySelector('table');

  expect(patientsList).not.toBeInTheDocument();
});

test('renders new schedule modal', () => {
  const { getByText } = render(<Schedule schedulesListData={scheduleData} />, { store });

  fireEvent.click(getByText(/novo agendamento/i));
  const createButton = getByText(/criar/i);

  expect(createButton).toBeInTheDocument();
});

test('renders update schedule modal', () => {
  const { getByText } = render(<Schedule schedulesListData={scheduleData} />, { store });

  fireEvent.click(getByText(/pikachu/i));
  const updateScheduleModalTitle = getByText(/detalhes do agendamento/i);

  expect(updateScheduleModalTitle).toBeInTheDocument();
});
