import React from 'react';
import { createStore } from 'redux';
import { fireEvent } from '@testing-library/react';
import { render } from '../../test-utils';
import Schedule from './Schedule';

import { initialState } from '../../reducers/index';

const store = createStore(() => (initialState));

const scheduleData = [
  {
    patientName: 'Pikachu',
    date: '01/01/2020'
  }
];

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

test('renders schedule section title', () => {
  const { getByText } = render(<Schedule schedulesListData={scheduleData} patientsListData={patientsData} />, { store });

  const scheduleTitle = getByText(/agendamentos/i);

  expect(scheduleTitle).toBeInTheDocument();
});

test('renders add schedule button', () => {
  const { getByText } = render(<Schedule schedulesListData={scheduleData} patientsListData={patientsData} />, { store });

  const scheduleButton = getByText(/novo agendamento/i);

  expect(scheduleButton).toBeInTheDocument();
});

test('renders schedules list', () => {
  const { getByText } = render(<Schedule schedulesListData={scheduleData} patientsListData={patientsData} />, { store });

  const patientName = getByText(/Pikachu/i);

  expect(patientName).toBeInTheDocument();
});

test('not renders schedules list', () => {
  const { container, getByText } = render(<Schedule schedulesListData={[]} patientsListData={patientsData} />, { store });

  const schedulesList = container.querySelector('table');
  const noScheduleData = getByText(/nenhuma consulta agendada/i);

  expect(schedulesList).not.toBeInTheDocument();
  expect(noScheduleData).toBeInTheDocument();
});

test('not renders patients list', () => {
  const { container } = render(<Schedule schedulesListData={[]} patientsListData={patientsData} />, { store });

  const patientsList = container.querySelector('table');

  expect(patientsList).not.toBeInTheDocument();
});

test('renders new schedule modal', () => {
  const { getByText } = render(<Schedule schedulesListData={scheduleData} patientsListData={patientsData} />, { store });

  fireEvent.click(getByText(/novo agendamento/i));
  const createButton = getByText(/criar/i);

  expect(createButton).toBeInTheDocument();
});

test('renders update schedule modal', () => {
  const { getByText } = render(<Schedule schedulesListData={scheduleData} patientsListData={patientsData} />, { store });

  fireEvent.click(getByText(/pikachu/i));
  const updateScheduleModalTitle = getByText(/detalhes do agendamento/i);

  expect(updateScheduleModalTitle).toBeInTheDocument();
});
