import * as actions from './index';

test('creates an action to displays patient details', () => {
  const displayPatientDetails = true;
  const expectedAction = {
    type: actions.DISPLAY_PATIENT_DETAILS,
    displayPatientDetails
  };

  expect(actions.displayPatientDetails(displayPatientDetails)).toEqual(expectedAction);
});

test('creates an action to set patient details data', () => {
  const patientDetailsData = [];
  const expectedAction = {
    type: actions.PATIENT_DETAILS_DATA,
    patientDetailsData
  };

  expect(actions.patientDetailsData(patientDetailsData)).toEqual(expectedAction);
});

test('creates an action to displays schedules', () => {
  const displaySchedules = true;
  const expectedAction = {
    type: actions.DISPLAY_SCHEDULES,
    displaySchedules
  };

  expect(actions.displaySchedules(displaySchedules)).toEqual(expectedAction);
});
