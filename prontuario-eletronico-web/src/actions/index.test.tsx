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

test('creates an action to create a new schedule', () => {
  const newSchedule = true;
  const expectedAction = {
    type: actions.NEW_SCHEDULE,
    newSchedule
  };

  expect(actions.newSchedule(newSchedule)).toEqual(expectedAction);
});

test('creates an action to update a schedule', () => {
  const updateSchedule = true;
  const expectedAction = {
    type: actions.UPDATE_SCHEDULE,
    updateSchedule
  };

  expect(actions.updateSchedule(updateSchedule)).toEqual(expectedAction);
});

test('creates an action to select a schedule', () => {
  const selectedSchedule = {};
  const expectedAction = {
    type: actions.SELECTED_SCHEDULE,
    selectedSchedule
  };

  expect(actions.selectedSchedule(selectedSchedule)).toEqual(expectedAction);
});

test('creates an action to update a schedule', () => {
  const displayAnnotation = true;
  const expectedAction = {
    type: actions.DISPLAY_ANNOTATION,
    displayAnnotation
  };

  expect(actions.displayAnnotation(displayAnnotation)).toEqual(expectedAction);
});

test('creates an action to update data', () => {
  const updateData = true;
  const expectedAction = {
    type: actions.UPDATE_DATA,
    updateData
  };

  expect(actions.updateData(updateData)).toEqual(expectedAction);
});

test('creates an action to sets schedule data', () => {
  const scheduleData = [];
  const expectedAction = {
    type: actions.SCHEDULE_DATA,
    scheduleData
  };

  expect(actions.scheduleData(scheduleData)).toEqual(expectedAction);
});

test('creates an action to delete a schedule', () => {
  const schedule = {};
  const expectedAction = {
    type: actions.DELETE_SCHEDULE,
    schedule
  };

  expect(actions.deleteSchedule(schedule)).toEqual(expectedAction);
});
