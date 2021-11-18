import './App.css';
import React from 'react';
import Home from './components/home/Home'
import {Routes, Route} from 'react-router-dom'
import Target from './components/target/Target';
import Cronometro from './components/cronometro/Cronometro';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/timer' element={<Cronometro/>}/>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/game' element={<Target/>}></Route>
      </Routes>
      </div>
  );
}

export default App;
