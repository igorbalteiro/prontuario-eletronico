import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import Patients from './components/Patients/Patients';
import Patient from './components/Patient/Patient';

import {
  displayPatientDetails as  displayPatientDetailsAction
} from './actions/index';

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
];

function App() {
  const dispatch = useDispatch();

  const displayPatientDetails = useSelector((state) => state.displayPatientDetails);
  const patientDetailsData = useSelector((state) => state.patientDetailsData);

  const renderMainContent = () => {
    if (displayPatientDetails) return <Patient patientDetails={patientDetailsData} />

    return <Patients patientsListData={patientsData} />
  };

  return (
    <main className='App'>
      <header className='App-header'>
        <h1 className='App-header-title'>PRONTOMED</h1>
        <nav className='App-header-navigation'>
          <a href='#' onClick={ () => dispatch(displayPatientDetailsAction(false)) }>Pacientes</a>
          <a href='#'>Agendamentos</a>
        </nav>
      </header>
      {renderMainContent()}
    </main>
  );
}

export default App;
