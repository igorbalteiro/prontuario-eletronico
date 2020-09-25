export const DISPLAY_PATIENT_DETAILS = 'DISPLAY_PATIENT_DETAILS';
export const PATIENT_DETAILS_DATA = 'PATIENT_DETAILS_DATA';
export const DISPLAY_SCHEDULES = 'DISPLAY_SCHEDULES';
export const NEW_SCHEDULE = 'NEW_SCHEDULE';
export const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';
export const SELECTED_SCHEDULE = 'SELECTED_SCHEDULE';
export const DISPLAY_ANNOTATION = 'DISPLAY_ANNOTATION';
export const UPDATE_DATA = 'UPDATE_DATA';
export const SCHEDULE_DATA = 'SCHEDULE_DATA';
export const DELETE_SCHEDULE = 'DELETE_SCHEDULE';

export const displayPatientDetails = (displayPatientDetails) => ({
  type: DISPLAY_PATIENT_DETAILS,
  displayPatientDetails,
});

export const patientDetailsData = (patientDetailsData) => ({
  type: PATIENT_DETAILS_DATA,
  patientDetailsData,
});

export const displaySchedules = (displaySchedules) => ({
  type: DISPLAY_SCHEDULES,
  displaySchedules,
});

export const newSchedule = (newSchedule) => ({
  type: NEW_SCHEDULE,
  newSchedule,
});

export const updateSchedule = (updateSchedule) => ({
  type: UPDATE_SCHEDULE,
  updateSchedule,
});

export const selectedSchedule = (selectedSchedule) => ({
  type: SELECTED_SCHEDULE,
  selectedSchedule,
});

export const displayAnnotation = (displayAnnotation) => ({
  type: DISPLAY_ANNOTATION,
  displayAnnotation,
});

export const updateData = (updateData) => ({
  type: UPDATE_DATA,
  updateData,
});

export const scheduleData = (scheduleData) => ({
  type: SCHEDULE_DATA,
  scheduleData,
});

export const deleteSchedule = (schedule) => ({
  type: DELETE_SCHEDULE,
  schedule,
});
