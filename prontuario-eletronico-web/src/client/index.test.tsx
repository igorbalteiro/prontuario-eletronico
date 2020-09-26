import axios from 'axios';
import {
  getPatients,
  getSchedules,
  deleteSchedule,
  updateSchedule,
  deletePatient,
  createPatient,
  updatePatient
} from './index';

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

    describe('createPatient function', () => {
      const data = {
        "name": "Pikachu",
        "telephone": "21999999999",
        "birthDate": "01/01/1970",
        "gender": "masculino",
        "height": 173,
        "weight": 80
      };

      it('should return correct message and argument', async () => {
        mockedAxios.post.mockImplementationOnce(() => Promise.resolve(patientsData));

        await expect(createPatient(data)).resolves.toEqual(patientsData);
        expect(axios.post).toHaveBeenCalledTimes(1);
        expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/api/v1/patients', data);
      });

      it('should return empty array when no data is found', async () => {
        const errorMessage = 'Network Error';

        mockedAxios.post.mockImplementationOnce(() =>
          Promise.reject(new Error(errorMessage)),
        );

        await expect(createPatient(data)).rejects.toThrow(errorMessage);
      });
    });

    describe('updatePatient function', () => {
      const data = {
        "name": "Pikachu",
        "telephone": "21999999999",
        "birthDate": "01/01/1970",
        "gender": "masculino",
        "height": 173,
        "weight": 80
      };

      it('should return correct message and argument', async () => {
        mockedAxios.put.mockImplementationOnce(() => Promise.resolve({
          message: 'Patient was updated successfully!'
        }));

        await expect(updatePatient({...data, id: 1})).resolves.toEqual({
          message: 'Patient was updated successfully!'
        });
        expect(axios.put).toHaveBeenCalledTimes(1);
        expect(axios.put).toHaveBeenCalledWith('http://localhost:3001/api/v1/patients/1', data);
      });

      it('should return empty array when no data is found', async () => {
        const errorMessage = 'Network Error';

        mockedAxios.put.mockImplementationOnce(() =>
          Promise.reject(new Error(errorMessage)),
        );

        await expect(updatePatient({...data, id: 1})).rejects.toThrow(errorMessage);
      });
    });

    describe('deletePatient function', () => {
      it('should return correct message and argument', async () => {
        mockedAxios.delete.mockImplementationOnce(() => Promise.resolve({
          message: 'Patient was deleted successfully!'
        }));

        await expect(deletePatient('1')).resolves.toEqual({
          message: 'Patient was deleted successfully!'
        });
        expect(axios.delete).toHaveBeenCalledTimes(1);
        expect(axios.delete).toHaveBeenCalledWith('http://localhost:3001/api/v1/patients/1');
      });

      it('should return empty array when no data is found', async () => {
        const errorMessage = 'Network Error';

        mockedAxios.delete.mockImplementationOnce(() =>
          Promise.reject(new Error(errorMessage)),
        );

        await expect(deletePatient('1')).rejects.toThrow(errorMessage);
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

    describe('deleteSchedule function', () => {
      it('should return correct message and argument', async () => {
        mockedAxios.delete.mockImplementationOnce(() => Promise.resolve({
          message: 'Schedule was deleted successfully!'
        }));

        await expect(deleteSchedule('1')).resolves.toEqual({
          message: 'Schedule was deleted successfully!'
        });
        expect(axios.delete).toHaveBeenCalledTimes(1);
        expect(axios.delete).toHaveBeenCalledWith('http://localhost:3001/api/v1/schedules/1');
      });

      it('should return empty array when no data is found', async () => {
        const errorMessage = 'Network Error';

        mockedAxios.delete.mockImplementationOnce(() =>
          Promise.reject(new Error(errorMessage)),
        );

        await expect(deleteSchedule('1')).rejects.toThrow(errorMessage);
      });
    });

    describe('updateSchedule function', () => {
      const data = {
        "patientName": "Igor",
        "date": "01/01/2021",
        "description": "",
        "patientID": 1,
        "id": 1
      };

      it('should return correct message and argument', async () => {
        mockedAxios.put.mockImplementationOnce(() => Promise.resolve({
          message: 'Schedule was updated successfully!'
        }));

        await expect(updateSchedule(data)).resolves.toEqual({
          message: 'Schedule was updated successfully!'
        });
        expect(axios.put).toHaveBeenCalledTimes(1);
        expect(axios.put).toHaveBeenCalledWith('http://localhost:3001/api/v1/schedules/1', {"date": "01/01/2021", "description": "", "patientID": 1, "patientName": "Igor"});
      });

      it('should return empty array when no data is found', async () => {
        const errorMessage = 'Network Error';

        mockedAxios.put.mockImplementationOnce(() =>
          Promise.reject(new Error(errorMessage)),
        );

        await expect(updateSchedule(data)).rejects.toThrow(errorMessage);
      });
    });
  });
});
