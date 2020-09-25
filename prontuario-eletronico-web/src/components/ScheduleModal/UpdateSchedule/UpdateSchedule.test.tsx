import React from 'react';
import { createStore } from 'redux';
import { render } from '../../../test-utils';
import UpdateSchedule from './UpdateSchedule';

import { initialState } from '../../../reducers/index';

const store = createStore(() => (initialState));

const scheduleListData = [
  { patientName: 'Pikachu'},
  { patientName: 'Raichu'}
];

const schedule = { id: 1, date: '01/01/1970'};

test('renders schedule modal title', () => {
  const { getByText } = render(<UpdateSchedule patientsList={scheduleListData} scheduleData={schedule} />, { store });

  const scheduleModalTitle = getByText(/detalhes do agendamento/i);

  expect(scheduleModalTitle).toBeInTheDocument();
});

test('renders close icon', () => {
  const { container } = render(<UpdateSchedule patientsList={scheduleListData} scheduleData={schedule} />, { store });

  const closeIcon = container.querySelector('svg');

  expect(closeIcon).toBeInTheDocument();
});

test('renders delete schedule button', () => {
  const { getByText } = render(<UpdateSchedule patientsList={scheduleListData} scheduleData={schedule} />, { store });

  const createScheduleButton = getByText(/excluir/i);

  expect(createScheduleButton).toBeInTheDocument();
});

test('renders save schedule button', () => {
  const { getByText } = render(<UpdateSchedule patientsList={scheduleListData} scheduleData={schedule} />, { store });

  const createScheduleButton = getByText(/salvar/i);

  expect(createScheduleButton).toBeInTheDocument();
});

test('renders select patient list', () => {
  const { getByText } = render(<UpdateSchedule patientsList={scheduleListData} scheduleData={schedule} />, { store });

  const patientSelect = getByText(/pikachu/i);

  expect(patientSelect).toBeInTheDocument();
});

test('renders date picker', () => {
  const { container } = render(<UpdateSchedule patientsList={scheduleListData} scheduleData={schedule} />, { store });

  const datePicker = container.querySelector('input');

  expect(datePicker).toBeInTheDocument();
});

test('renders date picker with correct date', () => {
  const { container } = render(<UpdateSchedule patientsList={scheduleListData} scheduleData={schedule} />, { store });

  const datePicker = container.querySelector('input');

  expect(datePicker.value).toEqual('01/01/1970');
});
