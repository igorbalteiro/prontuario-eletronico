import React from 'react';
import { createStore } from 'redux';
import { render } from '../../test-utils';
import SchedulesList from './SchedulesList';

const store = createStore(() => ({
  displayPatientDetails: false,
  patientDetailsData: {'name': 'Pikachu'},
  displaySchedules: false,
  newSchedule: false,
  updateSchedule: false,
  scheduleDate: ''
}));

const schedulesData = [
  {
    patientName: 'Person A',
    date: '01/01/2020'
  }
];

test('renders schedule header table', () => {
  const { getByText } = render(<SchedulesList schedulesList={schedulesData} />, { store });

  const scheduleDateHeader = getByText(/data/i);
  const schedulePatientHeader = getByText(/paciente/i);

  expect(scheduleDateHeader).toBeInTheDocument();
  expect(schedulePatientHeader).toBeInTheDocument();
});

test('renders schedule data', () => {
  const { getByText } = render(<SchedulesList schedulesList={schedulesData} />, { store });

  const scheduleDate = getByText('01/01/2020');
  const schedulePatient = getByText(/person a/i);

  expect(scheduleDate).toBeInTheDocument();
  expect(schedulePatient).toBeInTheDocument();
});
