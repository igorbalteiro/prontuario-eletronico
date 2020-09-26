import { combineReducers } from 'redux';
import { flatten, not, whereEq, findIndex, propEq, update } from 'ramda';
import {
  PATIENTS_DATA,
  SCHEDULES_DATA,
  DISPLAY_PATIENT_DETAILS,
  DISPLAY_SCHEDULES,
  DISPLAY_ANNOTATION,
  SELECTED_PATIENT,
  SELECTED_SCHEDULE,
  SELECTED_ANNOTATION,
  CREATE_SCHEDULE_MODAL,
  UPDATE_SCHEDULE_MODAL,
  DELETE_SCHEDULE_MODAL,
  DELETE_SCHEDULE,
  UPDATE_SCHEDULE,
  DELETE_PATIENT,
  CREATE_PATIENT_MODAL,
  UPDATE_PATIENT_MODAL,
  UPDATE_PATIENT
} from '../actions/index';

export const initialState = {
  patientsData: [],
  schedulesData: [],
  displayPatientDetails: false,
  displaySchedules: false,
  displayAnnotation: false,
  selectedPatient: {},
  selectedSchedule: {},
  selectedAnnotation: {},
  createScheduleModal: false,
  updateScheduleModal: false,
  deleteScheduleModal: false,
  createPatientModal: false,
  updatePatientModal: false
};

const patientsData = (state = [], action) => {
  switch (action.type) {
    case PATIENTS_DATA:
      return flatten([...state, action.patientsData])
    case UPDATE_PATIENT:
      const index = findIndex(propEq('id', action.updatePatient.id))(state)
      return update(index, action.updatePatient, state)
    case DELETE_PATIENT:
      return state.filter(item => not(whereEq(item, action.deletePatient)))
    default:
      return state
  }
};

const schedulesData = (state = [], action) => {
  switch (action.type) {
    case SCHEDULES_DATA:
      return flatten([...state, action.schedulesData])
    case UPDATE_SCHEDULE:
      const index = findIndex(propEq('id', action.updateSchedule.id))(state)
      return update(index, action.updateSchedule, state)
    case DELETE_SCHEDULE:
      return state.filter(item => not(whereEq(item, action.deleteSchedule)))
    default:
      return state
  }
};

const displayPatientDetails = (state = false, action) => {
  switch (action.type) {
    case DISPLAY_PATIENT_DETAILS:
      return action.displayPatientDetails
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

const displayAnnotation = (state = false, action) => {
  switch (action.type) {
    case DISPLAY_ANNOTATION:
      return action.displayAnnotation
    default:
      return state
  }
};

const selectedPatient = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_PATIENT:
      return action.selectedPatient
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

const selectedAnnotation = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_ANNOTATION:
      return action.selectedAnnotation
    default:
      return state
  }
};

const createScheduleModal = (state = false, action) => {
  switch (action.type) {
    case CREATE_SCHEDULE_MODAL:
      return action.createScheduleModal
    default:
      return state
  }
};

const updateScheduleModal = (state = false, action) => {
  switch (action.type) {
    case UPDATE_SCHEDULE_MODAL:
      return action.updateScheduleModal
    default:
      return state
  }
};

const deleteScheduleModal = (state = false, action) => {
  switch (action.type) {
    case DELETE_SCHEDULE_MODAL:
      return action.deleteScheduleModal
    default:
      return state
  }
};

const createPatientModal = (state = false, action) => {
  switch (action.type) {
    case CREATE_PATIENT_MODAL:
      return action.createPatientModal
    default:
      return state
  }
};

const updatePatientModal = (state = false, action) => {
  switch (action.type) {
    case UPDATE_PATIENT_MODAL:
      return action.updatePatientModal
    default:
      return state
  }
};



const rootReducer = combineReducers({
  patientsData,
  schedulesData,
  displayPatientDetails,
  displaySchedules,
  displayAnnotation,
  selectedPatient,
  selectedSchedule,
  selectedAnnotation,
  createScheduleModal,
  updateScheduleModal,
  deleteScheduleModal,
  createPatientModal,
  updatePatientModal
});

export default rootReducer;
