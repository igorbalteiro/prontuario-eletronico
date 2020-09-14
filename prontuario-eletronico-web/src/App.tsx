import React from 'react';
import './App.css';

import Patients from './components/Patients/Patients';

const patientsData = [
  {
    name: 'Person A',
    gender: 'Male',
    birthDate: '01/01/1970',
    telephone: '(21) XXXXX-XXXX'
  },
  {
    name: 'Person B',
    gender: 'Female',
    birthDate: '01/01/1960',
    telephone: '(11) XXXXX-XXXX'
  }
];

function App() {
  return (
    <main className='App'>
      <header className='App-header'>
        <h1 className='App-header-title'>PRONTOMED</h1>
        <nav className='App-header-navigation'>
          <a href='#'>Pacientes</a>
          <a href='#'>Agendamentos</a>
        </nav>
      </header>
      <Patients patientsListData={patientsData} />
    </main>
  );
}

export default App;
