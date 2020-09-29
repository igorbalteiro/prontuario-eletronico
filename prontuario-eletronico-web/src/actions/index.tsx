export const PATIENTS_DATA = 'PATIENTS_DATA';
export const SCHEDULES_DATA = 'SCHEDULES_DATA';

export const DISPLAY_PATIENT_DETAILS = 'DISPLAY_PATIENT_DETAILS';
export const DISPLAY_SCHEDULES = 'DISPLAY_SCHEDULES';
export const DISPLAY_ANNOTATION = 'DISPLAY_ANNOTATION';

export const SELECTED_PATIENT = 'SELECTED_PATIENT';
export const SELECTED_SCHEDULE = 'SELECTED_SCHEDULE';

export const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';
export const DELETE_SCHEDULE = 'DELETE_SCHEDULE';

export const UPDATE_PATIENT = 'UPDATE_PATIENT';
export const DELETE_PATIENT = 'DELETE_PATIENT';

export const CREATE_SCHEDULE_MODAL = 'CREATE_SCHEDULE_MODAL';
export const UPDATE_SCHEDULE_MODAL = 'UPDATE_SCHEDULE_MODAL';

export const CREATE_PATIENT_MODAL = 'CREATE_PATIENT_MODAL';
export const UPDATE_PATIENT_MODAL = 'UPDATE_PATIENT_MODAL';
export const DELETE_PATIENT_MODAL = 'DELETE_PATIENT_MODAL';

export const patientsData = (patientsData) => ({
  type: PATIENTS_DATA,
  patientsData,
});

export const schedulesData = (schedulesData) => ({
  type: SCHEDULES_DATA,
  schedulesData,
});


export const displayPatientDetails = (displayPatientDetails) => ({
  type: DISPLAY_PATIENT_DETAILS,
  displayPatientDetails,
});

export const displaySchedules = (displaySchedules) => ({
  type: DISPLAY_SCHEDULES,
  displaySchedules,
});

export const displayAnnotation = (displayAnnotation) => ({
  type: DISPLAY_ANNOTATION,
  displayAnnotation,
});


export const selectedPatient = (selectedPatient) => ({
  type: SELECTED_PATIENT,
  selectedPatient,
});

export const selectedSchedule = (selectedSchedule) => ({
  type: SELECTED_SCHEDULE,
  selectedSchedule,
});

export const updateSchedule = (updateSchedule) => ({
  type: UPDATE_SCHEDULE,
  updateSchedule,
});

export const deleteSchedule = (deleteSchedule) => ({
  type: DELETE_SCHEDULE,
  deleteSchedule,
});

export const createScheduleModal = (createScheduleModal) => ({
  type: CREATE_SCHEDULE_MODAL,
  createScheduleModal,
});

export const updateScheduleModal = (updateScheduleModal) => ({
  type: UPDATE_SCHEDULE_MODAL,
  updateScheduleModal,
});

export const updatePatient = (updatePatient) => ({
  type: UPDATE_PATIENT,
  updatePatient,
});

export const deletePatient = (deletePatient) => ({
  type: DELETE_PATIENT,
  deletePatient,
});

export const createPatientModal = (createPatientModal) => ({
  type: CREATE_PATIENT_MODAL,
  createPatientModal,
});

export const updatePatientModal = (updatePatientModal) => ({
  type: UPDATE_PATIENT_MODAL,
  updatePatientModal,
});

export const deletePatientModal = (deletePatientModal) => ({
  type: DELETE_PATIENT_MODAL,
  deletePatientModal,
});