import axios from 'axios';

const PORT = process.env.SERVER_PORT || 3001;
const BASE_URL = `http://localhost:${PORT}/api/v1`;

export const getPatients = async () => {
  return await axios.get(`${BASE_URL}/patients`);
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
