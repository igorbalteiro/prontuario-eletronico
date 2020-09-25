import * as actions from './index';

test('creates an action to set patients data', () => {
  const patientsData = [];
  const expectedAction = {
    type: actions.PATIENTS_DATA,
    patientsData
  };

  expect(actions.patientsData(patientsData)).toEqual(expectedAction);
});

test('creates an action to set schedules data', () => {
  const schedulesData = [];
  const expectedAction = {
    type: actions.SCHEDULES_DATA,
    schedulesData
  };

  expect(actions.schedulesData(schedulesData)).toEqual(expectedAction);
});

test('creates an action to displays patient details', () => {
  const displayPatientDetails = true;
  const expectedAction = {
    type: actions.DISPLAY_PATIENT_DETAILS,
    displayPatientDetails
  };

  expect(actions.displayPatientDetails(displayPatientDetails)).toEqual(expectedAction);
});

test('creates an action to displays schedules', () => {
  const displaySchedules = true;
  const expectedAction = {
    type: actions.DISPLAY_SCHEDULES,
    displaySchedules
  };

  expect(actions.displaySchedules(displaySchedules)).toEqual(expectedAction);
});

test('creates an action to displays annotation', () => {
  const displayAnnotation = true;
  const expectedAction = {
    type: actions.DISPLAY_ANNOTATION,
    displayAnnotation
  };

  expect(actions.displayAnnotation(displayAnnotation)).toEqual(expectedAction);
});

test('creates an action to set selected patient data', () => {
  const selectedPatient = [];
  const expectedAction = {
    type: actions.SELECTED_PATIENT,
    selectedPatient
  };

  expect(actions.selectedPatient(selectedPatient)).toEqual(expectedAction);
});

test('creates an action to set selected schedule data', () => {
  const selectedSchedule = [];
  const expectedAction = {
    type: actions.SELECTED_SCHEDULE,
    selectedSchedule
  };

  expect(actions.selectedSchedule(selectedSchedule)).toEqual(expectedAction);
});

test('creates an action to set selected annotation data', () => {
  const selectedAnnotation = [];
  const expectedAction = {
    type: actions.SELECTED_ANNOTATION,
    selectedAnnotation
  };

  expect(actions.selectedAnnotation(selectedAnnotation)).toEqual(expectedAction);
});

test('creates an action to create a new schedule', () => {
  const createSchedule = {};
  const expectedAction = {
    type: actions.CREATE_SCHEDULE,
    createSchedule
  };

  expect(actions.createSchedule(createSchedule)).toEqual(expectedAction);
});

test('creates an action to update a schedule', () => {
  const updateSchedule = {};
  const expectedAction = {
    type: actions.UPDATE_SCHEDULE,
    updateSchedule
  };

  expect(actions.updateSchedule(updateSchedule)).toEqual(expectedAction);
});

test('creates an action to delete a schedule', () => {
  const deleteSchedule = {};
  const expectedAction = {
    type: actions.DELETE_SCHEDULE,
    deleteSchedule
  };

  expect(actions.deleteSchedule(deleteSchedule)).toEqual(expectedAction);
});

test('creates an action to display create schedule modal', () => {
  const createScheduleModal = true;
  const expectedAction = {
    type: actions.CREATE_SCHEDULE_MODAL,
    createScheduleModal
  };

  expect(actions.createScheduleModal(createScheduleModal)).toEqual(expectedAction);
});

test('creates an action to display update schedule modal', () => {
  const updateScheduleModal = true;
  const expectedAction = {
    type: actions.UPDATE_SCHEDULE_MODAL,
    updateScheduleModal
  };

  expect(actions.updateScheduleModal(updateScheduleModal)).toEqual(expectedAction);
});

test('creates an action to display delete schedule modal', () => {
  const deleteScheduleModal = true;
  const expectedAction = {
    type: actions.DELETE_SCHEDULE_MODAL,
    deleteScheduleModal
  };

  expect(actions.deleteScheduleModal(deleteScheduleModal)).toEqual(expectedAction);
});

test('creates an action to create a new patient', () => {
  const createPatient = {};
  const expectedAction = {
    type: actions.CREATE_PATIENT,
    createPatient
  };

  expect(actions.createPatient(createPatient)).toEqual(expectedAction);
});

test('creates an action to update a patient', () => {
  const updatePatient = {};
  const expectedAction = {
    type: actions.UPDATE_PATIENT,
    updatePatient
  };

  expect(actions.updatePatient(updatePatient)).toEqual(expectedAction);
});

test('creates an action to delete a patient', () => {
  const deletePatient = {};
  const expectedAction = {
    type: actions.DELETE_PATIENT,
    deletePatient
  };

  expect(actions.deletePatient(deletePatient)).toEqual(expectedAction);
});