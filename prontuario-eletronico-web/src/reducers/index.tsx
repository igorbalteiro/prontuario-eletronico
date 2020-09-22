import { combineReducers } from 'redux';
import {
  DISPLAY_PATIENT_DETAILS,
  PATIENT_DETAILS_DATA,
  DISPLAY_SCHEDULES,
  NEW_SCHEDULE,
  UPDATE_SCHEDULE,
  SET_SCHEDULE_DATE,
  DISPLAY_ANNOTATION,
  UPDATE_DATA
} from '../actions/index';

export const initialState = {
  displayPatientDetails: false,
  patientDetailsData: {},
  displaySchedules: false,
  newSchedule: false,
  updateSchedule: false,
  scheduleDate: '',
  displayAnnotation: false,
  updateData: false
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

const updateSchedule = (state = false, action) => {
  switch (action.type) {
    case UPDATE_SCHEDULE:
      return action.updateSchedule
    default:
      return state
  }
};

const scheduleDate = (state = '', action) => {
  switch (action.type) {
    case SET_SCHEDULE_DATE:
      return action.scheduleDate
    default:
      return state
  }
};

const displayAnnotation = (state = false, action) => {
  switch (action.type) {
    case DISPLAY_ANNOTATION:
      return action.displayAnnotation
    default:
      return state
  }
};

const updateData = (state = false, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return action.updateData
    default:
      return state
  }
};

const rootReducer = combineReducers({
  displayPatientDetails,
  patientDetailsData,
  displaySchedules,
  newSchedule,
  updateSchedule,
  scheduleDate,
  displayAnnotation,
  updateData
});

export default rootReducer;
