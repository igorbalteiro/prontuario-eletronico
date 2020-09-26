import axios from 'axios';

const PORT = process.env.SERVER_PORT || 3001;
const BASE_URL = `http://localhost:${PORT}/api/v1`;

export const getPatients = async () => {
  return await axios.get(`${BASE_URL}/patients`);
};

export const deletePatient = async (patientID) => {
  return await axios.delete(`${BASE_URL}/patients/${patientID}`);
};

export const createPatient = async (patientData: any) => {
  return await axios.post(`${BASE_URL}/patients`, {
    'name': patientData.name,
    'birthDate': patientData.birthDate,
    'telephone': patientData.telephone,
    'gender': patientData.gender,
    'height': patientData.height,
    'weight': patientData.weight
  });
};

export const updatePatient = async (patientData: any) => {
  return await axios.put(`${BASE_URL}/patients/${patientData.id}`, {
    'name': patientData.name,
    'birthDate': patientData.birthDate,
    'telephone': patientData.telephone,
    'gender': patientData.gender,
    'height': patientData.height,
    'weight': patientData.weight
  });
};

export const getSchedules = async () => {
  return await axios.get(`${BASE_URL}/schedules`);
};

export const createSchedule = async (scheduleData: any) => {
  return await axios.post(`${BASE_URL}/schedules`, {
    'patientName': scheduleData.patientName,
    'date': scheduleData.date,
    'description': scheduleData.description,
    'patientID': scheduleData.patientID
  });
};

export const deleteSchedule = async (scheduleID) => {
  return await axios.delete(`${BASE_URL}/schedules/${scheduleID}`);
};

export const updateSchedule = async (scheduleData: any) => {
  return await axios.put(`${BASE_URL}/schedules/${scheduleData.id}`, {
    'patientName': scheduleData.patientName,
    'date': scheduleData.date,
    'description': scheduleData.description,
    'patientID': scheduleData.patientID
  });
};