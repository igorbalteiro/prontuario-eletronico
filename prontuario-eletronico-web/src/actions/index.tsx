export const DISPLAY_PATIENT_DETAILS = 'DISPLAY_PATIENT_DETAILS';
export const PATIENT_DETAILS_DATA = 'PATIENT_DETAILS_DATA';

export const displayPatientDetails = (displayPatientDetails) => ({
  type: DISPLAY_PATIENT_DETAILS,
  displayPatientDetails,
});

export const patientDetailsData = (patientDetailsData) => ({
  type: PATIENT_DETAILS_DATA,
  patientDetailsData,
});
