import React from 'react';
import { createStore } from 'redux';
import { render } from '../../../test-utils';
import NewScheduleModal from './NewSchedule';

const store = createStore(() => ({
  displayPatientDetails: false,
  patientDetailsData: {'name': 'Pikachu'},
  displaySchedules: false,
  newSchedule: false,
  updateSchedule: false,
  scheduleDate: ''
}));

const patientsData = [
  { patientName: 'Pikachu'},
  { patientName: 'Raichu'}
];

test('renders schedule modal title', () => {
  const { getByText } = render(<NewScheduleModal patientsList={patientsData} />, { store });

  const scheduleModalTitle = getByText(/novo agendamento/i);

  expect(scheduleModalTitle).toBeInTheDocument();
});

test('renders close icon', () => {
  const { container } = render(<NewScheduleModal patientsList={patientsData} />, { store });

  const closeIcon = container.querySelector('svg');

  expect(closeIcon).toBeInTheDocument();
});

test('renders cancel new schedule button', () => {
  const { getByText } = render(<NewScheduleModal patientsList={patientsData} />, { store });

  const createScheduleButton = getByText(/cancelar/i);

  expect(createScheduleButton).toBeInTheDocument();
});

test('renders create new schedule button', () => {
  const { getByText } = render(<NewScheduleModal patientsList={patientsData} />, { store });

  const createScheduleButton = getByText(/criar/i);

  expect(createScheduleButton).toBeInTheDocument();
});

test('renders select patient list', () => {
  const { getByText } = render(<NewScheduleModal patientsList={patientsData} />, { store });

  const patientSelect = getByText(/pikachu/i);

  expect(patientSelect).toBeInTheDocument();
});

test('renders date picker', () => {
  const { container } = render(<NewScheduleModal patientsList={patientsData} />, { store });

  const datePicker = container.querySelector('input');

  expect(datePicker).toBeInTheDocument();
});
