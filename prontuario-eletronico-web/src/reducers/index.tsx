import { combineReducers } from 'redux';
import {
  DISPLAY_PATIENT_DETAILS,
  PATIENT_DETAILS_DATA
} from '../actions/index';

export const initialState = {
  displayPatientDetails: false,
  patientDetailsData: {}
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

const rootReducer = combineReducers({
  displayPatientDetails,
  patientDetailsData
});

export default rootReducer;
