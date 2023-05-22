
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Nosotros from './components/nosotros';
import Catalogo from './components/catalogo';

function App() {
  return (
    <div className="App">
      <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='nosotros' element={<Nosotros/>}/>
        <Route path='catalogo' element={<Catalogo />}/>
      </Routes>
      </div>
    </div>
    
  );
};

export default App;
