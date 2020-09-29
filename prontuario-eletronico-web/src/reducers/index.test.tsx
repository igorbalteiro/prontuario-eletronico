import rootReducer from './index';
import * as actions from '../actions/index';

const initialState = {
  patientsData: [],
  schedulesData: [],
  displayPatientDetails: false,
  displaySchedules: false,
  displayAnnotation: false,
  selectedPatient: {},
  selectedSchedule: {},
  createScheduleModal: false,
  updateScheduleModal: false,
  createPatientModal: false,
  updatePatientModal: false
};

test('returns the initial state', () => {
  expect(rootReducer({}, {})).toEqual(initialState);
});

test('sets patients data', () => {
  const patientsData = [{ name: 'Pikachu' }];

  expect(rootReducer({}, { type: actions.PATIENTS_DATA, patientsData })).toEqual({
    ...initialState,
    patientsData: patientsData
  });
});

test('sets schedules data', () => {
  const schedulesData = [{ name: 'Pikachu', date: '01/01/1970' }];

  expect(rootReducer({}, { type: actions.SCHEDULES_DATA, schedulesData })).toEqual({
    ...initialState,
    schedulesData: schedulesData
  });
});

test('displays patient details', () => {
  const displayPatientDetails = true;

  expect(rootReducer({}, { type: actions.DISPLAY_PATIENT_DETAILS, displayPatientDetails })).toEqual({
    ...initialState,
    displayPatientDetails: displayPatientDetails
  });
});

test('displays schedules', () => {
  const displaySchedules = true;

  expect(rootReducer({}, { type: actions.DISPLAY_SCHEDULES, displaySchedules })).toEqual({
    ...initialState,
    displaySchedules: displaySchedules
  });
});

test('displays annotation modal', () => {
  const displayAnnotation = true;

  expect(rootReducer({}, { type: actions.DISPLAY_ANNOTATION, displayAnnotation })).toEqual({
    ...initialState,
    displayAnnotation: displayAnnotation
  });
});

test('sets selected patient data', () => {
  const selectedPatient = { name: 'Pikachu' };

  expect(rootReducer({}, { type: actions.SELECTED_PATIENT, selectedPatient })).toEqual({
    ...initialState,
    selectedPatient: selectedPatient
  });
});

test('sets selected schedule data', () => {
  const selectedSchedule = { name: 'Pikachu', date: '01/01/1970' };

  expect(rootReducer({}, { type: actions.SELECTED_SCHEDULE, selectedSchedule })).toEqual({
    ...initialState,
    selectedSchedule: selectedSchedule
  });
});

test('displays create schedule modal', () => {
  const createScheduleModal = true;

  expect(rootReducer({}, { type: actions.CREATE_SCHEDULE_MODAL, createScheduleModal })).toEqual({
    ...initialState,
    createScheduleModal: createScheduleModal
  });
});

test('displays update schedule modal', () => {
  const updateScheduleModal = true;

  expect(rootReducer({}, { type: actions.UPDATE_SCHEDULE_MODAL, updateScheduleModal })).toEqual({
    ...initialState,
    updateScheduleModal: updateScheduleModal
  });
});

test('displays create patient modal', () => {
  const createPatientModal = true;

  expect(rootReducer({}, { type: actions.CREATE_PATIENT_MODAL, createPatientModal })).toEqual({
    ...initialState,
    createPatientModal: createPatientModal
  });
});

test('displays update patient modal', () => {
  const updatePatientModal = true;

  expect(rootReducer({}, { type: actions.UPDATE_PATIENT_MODAL, updatePatientModal })).toEqual({
    ...initialState,
    updatePatientModal: updatePatientModal
  });
});