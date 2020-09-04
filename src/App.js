import React, { createContext, useState } from 'react';
import './App.css';
import CompOne from './components/CompOne/CompOne';
import CompSec from './components/CompSec/CompSec';
import CompThi from './components/CompThi/CompThi';
import Navbar from './components/NavBar/Navbar';

export const ContextAPI = createContext();
function App() {
  // export const ContextAPI = createContext(); | shows an error => we can't export anything from the inside of a function()
  
  const [cngNum, setCngNum] = useState(0);
  
  return (
    <ContextAPI.Provider value={[cngNum, setCngNum]}>
      <Navbar  />
      <CompOne />
      <CompSec />
      <CompThi />
    </ContextAPI.Provider>
  );
}

export default App;
