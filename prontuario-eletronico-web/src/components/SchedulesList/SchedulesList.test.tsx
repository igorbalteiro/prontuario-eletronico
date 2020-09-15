import React from 'react';
import { render } from '@testing-library/react';
import SchedulesList from './SchedulesList';

const schedulesData = [
  {
    patientName: 'Person A',
    date: '01/01/2020'
  }
];

test('renders schedule header table', () => {
  const { getByText } = render(<SchedulesList schedulesList={schedulesData} />);

  const scheduleDateHeader = getByText(/data/i);
  const schedulePatientHeader = getByText(/paciente/i);

  expect(scheduleDateHeader).toBeInTheDocument();
  expect(schedulePatientHeader).toBeInTheDocument();
});

test('renders schedule data', () => {
  const { getByText } = render(<SchedulesList schedulesList={schedulesData} />);

  const scheduleDate = getByText('01/01/2020');
  const schedulePatient = getByText(/person a/i);

  expect(scheduleDate).toBeInTheDocument();
  expect(schedulePatient).toBeInTheDocument();
});
