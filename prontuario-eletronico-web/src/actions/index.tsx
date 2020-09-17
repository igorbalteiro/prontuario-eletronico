export const DISPLAY_PATIENT_DETAILS = 'DISPLAY_PATIENT_DETAILS';
export const PATIENT_DETAILS_DATA = 'PATIENT_DETAILS_DATA';
export const DISPLAY_SCHEDULES = 'DISPLAY_SCHEDULES';
export const NEW_SCHEDULE = 'NEW_SCHEDULE';
export const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';
export const SET_SCHEDULE_DATE = 'SET_SCHEDULE_DATE';
export const DISPLAY_ANNOTATION = 'DISPLAY_ANNOTATION';

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

export const scheduleDate = (scheduleDate) => ({
  type: SET_SCHEDULE_DATE,
  scheduleDate,
});

export const displayAnnotation = (displayAnnotation) => ({
  type: DISPLAY_ANNOTATION,
  displayAnnotation,
});
