import React from 'react'
import './css/style.css'

import { HashRouter , Route , Routes } from 'react-router-dom'
import { Principal } from './component/index/principal';
import { Load } from './component/load/load';

function App() {
  return (
    <HashRouter>
       {/* para llamar a la ruta en la url va  localhost:3000/!#/ruta*/}
      <Routes>
        <Route path='/load' element={<Load/>}/>
        <Route path='/' element={<Principal/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
