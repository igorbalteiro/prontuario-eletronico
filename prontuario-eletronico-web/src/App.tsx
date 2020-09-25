import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import Patients from './components/Patients/Patients';
import Patient from './components/Patient/Patient';
import Schedule from './components/Schedule/Schedule';

import { getPatients, getSchedules } from './client/index';

import {
  displayPatientDetails as  displayPatientDetailsAction,
  displaySchedules as displaySchedulesAction,
  patientsData as patientsDataAction,
  schedulesData as schedulesDataAction
} from './actions/index';

function App() {
  const dispatch = useDispatch();

  const displayPatientDetails = useSelector((state) => state.displayPatientDetails);
  const displaySchedules = useSelector((state) => state.displaySchedules);

  const patientsData = useSelector((state) => state.patientsData);
  const schedulesData = useSelector((state) => state.schedulesData);
  const selectedPatient = useSelector((state) => state.selectedPatient);

  const renderMainContent = () => {
    if (displayPatientDetails) return <Patient patientDetails={selectedPatient} />
    if (displaySchedules) return <Schedule schedulesListData={schedulesData} patientsListData={patientsData} />

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
        dispatch(patientsDataAction(data));
      });

      getSchedules()
      .then(({ data }) => {
        dispatch(schedulesDataAction(data));
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
