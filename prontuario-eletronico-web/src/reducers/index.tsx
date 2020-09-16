import { combineReducers } from 'redux';
import {
  DISPLAY_PATIENT_DETAILS,
  PATIENT_DETAILS_DATA,
  DISPLAY_SCHEDULES,
  NEW_SCHEDULE
} from '../actions/index';

export const initialState = {
  displayPatientDetails: false,
  patientDetailsData: {},
  displaySchedules: false
};

const displayPatientDetails = (state = false, action) => {
  switch (action.type) {
    case DISPLAY_PATIENT_DETAILS:
      return action.displayPatientDetails
    default:
      return state
  }
};

const patientDetailsData = (state = {}, action) => {
  switch (action.type) {
    case PATIENT_DETAILS_DATA:
      return action.patientDetailsData
    default:
      return state
  }
};

const displaySchedules = (state = false, action) => {
  switch (action.type) {
    case DISPLAY_SCHEDULES:
      return action.displaySchedules
    default:
      return state
  }
};

const newSchedule = (state = false, action) => {
  switch (action.type) {
    case NEW_SCHEDULE:
      return action.newSchedule
    default:
      return state
  }
};

const rootReducer = combineReducers({
  displayPatientDetails,
  patientDetailsData,
  displaySchedules,
  newSchedule
});

export default rootReducer;
