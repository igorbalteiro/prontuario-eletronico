import React from 'react';
import './App.css';

import Patients from './components/Patients/Patients';

const patientsData = [
  {
    name: 'Pikachu',
    gender: 'no gender',
    birthDate: 'unknown birthdate',
    telephone: 'no telephone'
  }
];

function App() {
  return (
    <main className='App'>
      <header className='App-header'>
        <h1 className='App-header-title'>PRONTOMED</h1>
        <h2>Pacientes</h2>
        <h2>Agendamentos</h2>
      </header>
      <div>
        <Patients patientsListData={patientsData} />
      </div>
    </main>
  );
}

export default App;
