import rootReducer from './index';
import * as actions from '../actions/index';

const initialState = {
  displayPatientDetails: false,
  patientDetailsData: {},
  displaySchedules: false,
  newSchedule: false,
  updateSchedule: false,
  scheduleDate: '',
  displayAnnotation: false,
  updateData: false,
  scheduleData: []
};

test('returns the initial state', () => {
  expect(rootReducer({}, {})).toEqual(initialState);
});

test('displays patient details', () => {
  const displayPatientDetails = true;

  expect(rootReducer({}, { type: actions.DISPLAY_PATIENT_DETAILS, displayPatientDetails })).toEqual({
    ...initialState,
    displayPatientDetails: displayPatientDetails
  });
});

test('sets patient details data', () => {
  const patientDetailsData = { 'name': 'Pikachu' };

  expect(rootReducer({}, { type: actions.PATIENT_DETAILS_DATA, patientDetailsData })).toEqual({
    ...initialState,
    patientDetailsData: patientDetailsData
  });
});

test('displays schedules', () => {
  const displaySchedules = true;

  expect(rootReducer({}, { type: actions.DISPLAY_SCHEDULES, displaySchedules })).toEqual({
    ...initialState,
    displaySchedules: displaySchedules
  });
});

test('displays new schedule modal', () => {
  const newSchedule = true;

  expect(rootReducer({}, { type: actions.NEW_SCHEDULE, newSchedule })).toEqual({
    ...initialState,
    newSchedule: newSchedule
  });
});

test('displays update schedule modal', () => {
  const updateSchedule = true;

  expect(rootReducer({}, { type: actions.UPDATE_SCHEDULE, updateSchedule })).toEqual({
    ...initialState,
    updateSchedule: updateSchedule
  });
});

test('sets schedule date', () => {
  const scheduleDate = '01/01/1970';

  expect(rootReducer({}, { type: actions.SET_SCHEDULE_DATE, scheduleDate })).toEqual({
    ...initialState,
    scheduleDate: scheduleDate
  });
});

test('displays update schedule modal', () => {
  const displayAnnotation = true;

  expect(rootReducer({}, { type: actions.DISPLAY_ANNOTATION, displayAnnotation })).toEqual({
    ...initialState,
    displayAnnotation: displayAnnotation
  });
});

test('updates data', () => {
  const updateData = true;

  expect(rootReducer({}, { type: actions.UPDATE_DATA, updateData })).toEqual({
    ...initialState,
    updateData: updateData
  });
});

test.skip('sets schedule data', () => {
  const scheduleData = [{ name: 'Pikachu' }];

  expect(rootReducer({}, { type: actions.SCHEDULE_DATA, scheduleData })).toEqual({
    ...initialState,
    updateData: scheduleData
  });
});
