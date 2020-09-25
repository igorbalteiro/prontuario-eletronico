import { combineReducers } from 'redux';
import { flatten, not, whereEq } from 'ramda';
import {
  DISPLAY_PATIENT_DETAILS,
  PATIENT_DETAILS_DATA,
  DISPLAY_SCHEDULES,
  NEW_SCHEDULE,
  UPDATE_SCHEDULE,
  SELECTED_SCHEDULE,
  DISPLAY_ANNOTATION,
  UPDATE_DATA,
  SCHEDULE_DATA,
  DELETE_SCHEDULE
} from '../actions/index';

export const initialState = {
  displayPatientDetails: false,
  patientDetailsData: {},
  displaySchedules: false,
  newSchedule: false,
  updateSchedule: false,
  selectedSchedule: {},
  displayAnnotation: false,
  updateData: false,
  scheduleData: []
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

const selectedSchedule = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_SCHEDULE:
      return action.selectedSchedule
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

const scheduleData = (state = [], action) => {
  switch (action.type) {
    case SCHEDULE_DATA:
      return flatten([...state, action.scheduleData])
    case DELETE_SCHEDULE:
      return state.filter(item => not(whereEq(item, action.schedule)))
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
  selectedSchedule,
  displayAnnotation,
  updateData,
  scheduleData
});

export default rootReducer;
