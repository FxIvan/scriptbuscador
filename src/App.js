import React from 'react'
import './css/style.css'

import { HashRouter , Route , Routes } from 'react-router-dom'
import { Programa } from './component/programa/programa';
import { Load } from './component/load/load';
import { Principal } from './component/index/principal';

function App() {
  return (
    <HashRouter>
       {/* para llamar a la ruta en la url va  localhost:3000/!#/ruta*/}
      <Routes>
        <Route path='/' element={<Principal/>}/>
        <Route path='/load' element={<Load/>}/>
        <Route path='/informacion/:id' element={<Programa/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
