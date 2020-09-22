import axios from 'axios';
import { getPatients, getSchedules } from './index';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const patientsData = {
  data: [
    {
      "id": 1,
      "name": "Pikachu",
      "telephone": "21999999999",
      "birthDate": "01/01/1970",
      "gender": "masculino",
      "height": 173,
      "weight": 80
    }
  ]
};

const schedulesData = {
  data: [
    {
      "id": 1,
      "patientName": "Igor",
      "description": "",
      "date": "01/01/2021",
      "patientID": 1
    }
  ]
};

describe('Retrive patient and schedule client', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Patients', () => {
    describe('getPatients function', () => {
      it('should return correct data and argument', async () => {
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve(patientsData));

        await expect(getPatients()).resolves.toEqual(patientsData);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/api/v1/patients');
      });

      it('should return empty array when no data is found', async () => {
        const errorMessage = 'Network Error';

        mockedAxios.get.mockImplementationOnce(() =>
          Promise.reject(new Error(errorMessage)),
        );

        await expect(getPatients()).rejects.toThrow(errorMessage);
      });
    });
  });

  describe('Schedules', () => {
    describe('getSchedules function', () => {
      it('should return correct data and argument', async () => {
        mockedAxios.get.mockImplementationOnce(() => Promise.resolve(schedulesData));

        await expect(getSchedules()).resolves.toEqual(schedulesData);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/api/v1/schedules');
      });

      it('should return empty array when no data is found', async () => {
        const errorMessage = 'Network Error';

        mockedAxios.get.mockImplementationOnce(() =>
          Promise.reject(new Error(errorMessage)),
        );

        await expect(getSchedules()).rejects.toThrow(errorMessage);
      });
    });
  });
});
