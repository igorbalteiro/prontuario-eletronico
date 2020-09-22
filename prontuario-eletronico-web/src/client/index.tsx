import axios from 'axios';

const PORT = process.env.SERVER_PORT || 3001;
const BASE_URL = `http://localhost:${PORT}/api/v1`;

export const getPatients = async () => {
  return await axios.get(`${BASE_URL}/patients`);
};
