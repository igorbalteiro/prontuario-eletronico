import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import Patients from './components/Patients/Patients';
import Patient from './components/Patient/Patient';
import Schedule from './components/Schedule/Schedule';

import { getPatients, getSchedules } from './client/index';

import {
  displayPatientDetails as  displayPatientDetailsAction,
  displaySchedules as displaySchedulesAction
} from './actions/index';

/* const schedulesData = [
  {
    patientName: 'Person A',
    date: '01/01/2020'
  },
  {
    patientName: 'Person B',
    date: '10/02/2020'
  }
];

const patientsData = [
  {
    name: 'Person A',
    gender: 'Male',
    birthDate: '01/01/1970',
    telephone: '(21) XXXXX-XXXX',
    height: 1.68,
    weight: 90,
    annotations: [
      {
        date: '01/01/2020',
        description: 'Some description'
      },
      {
        date: '11/01/2020',
        description: 'Other description'
      }
    ]
  },
  {
    name: 'Person B',
    gender: 'Female',
    birthDate: '01/01/1960',
    telephone: '(11) XXXXX-XXXX',
    height: 1.88,
    weight: 80,
    annotations: [
      {
        date: '01/01/2020',
        description: 'Some description 1'
      },
      {
        date: '11/01/2020',
        description: 'Other description 1'
      }
    ]
  }
]; */

function App() {
  const dispatch = useDispatch();

  const displayPatientDetails = useSelector((state) => state.displayPatientDetails);
  const patientDetailsData = useSelector((state) => state.patientDetailsData);
  const displaySchedules = useSelector((state) => state.displaySchedules);

  const [patientsData, setPatientsData] = useState([]);
  const [schedulesData, setSchedulesData] = useState([]);

  const renderMainContent = () => {
    if (displayPatientDetails) return <Patient patientDetails={patientDetailsData} />
    if (displaySchedules) return <Schedule schedulesListData={schedulesData} />

    return <Patients patientsListData={patientsData} />
  };

  const displayPatientContent = () => {
    dispatch(displayPatientDetailsAction(false));
    dispatch(displaySchedulesAction(false));
  };

  const displayScheduleContent = () => {
    dispatch(displayPatientDetailsAction(false));
    dispatch(displaySchedulesAction(true));
  };

  useEffect(() => {
    getPatients()
      .then(({ data }) => {
        setPatientsData(data);
      })
      .catch((error) => {
        setPatientsData([]);
      });

      getSchedules()
      .then(({ data }) => {
        setSchedulesData(data);
      })
      .catch((error) => {
        setSchedulesData([]);
      });
  }, []);

  return (
    <main className='App'>
      <header className='App-header'>
        <h1 className='App-header-title'>PRONTOMED</h1>
        <nav className='App-header-navigation'>
          <a href='#' onClick={ () => displayPatientContent() }>Pacientes</a>
          <a href='#' onClick={ () => displayScheduleContent() }>Agendamentos</a>
        </nav>
      </header>
      {renderMainContent()}
    </main>
  );
}

export default App;
