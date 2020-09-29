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

test('creates an action to display create patient modal', () => {
  const createPatientModal = true;
  const expectedAction = {
    type: actions.CREATE_PATIENT_MODAL,
    createPatientModal
  };

  expect(actions.createPatientModal(createPatientModal)).toEqual(expectedAction);
});

test('creates an action to display update patient modal', () => {
  const updatePatientModal = true;
  const expectedAction = {
    type: actions.UPDATE_PATIENT_MODAL,
    updatePatientModal
  };

  expect(actions.updatePatientModal(updatePatientModal)).toEqual(expectedAction);
});

test('creates an action to display delete patient modal', () => {
  const deletePatientModal = true;
  const expectedAction = {
    type: actions.DELETE_PATIENT_MODAL,
    deletePatientModal
  };

  expect(actions.deletePatientModal(deletePatientModal)).toEqual(expectedAction);
});