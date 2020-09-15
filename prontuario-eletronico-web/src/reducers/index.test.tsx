import rootReducer from './index';
import * as actions from '../actions/index';

const initialState = {
  displayPatientDetails: false,
  patientDetailsData: {},
  displaySchedules: false
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
