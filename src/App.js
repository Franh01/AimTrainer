import './App.css';
import React from 'react';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import Switch from './components/switchOscuroClaro/Switch';
import SurvivalGameMode from './components/survivalGameMode/SurvivalGameMode';
import TimerGameMode from './components/timerGameMode/TimerGameMode'
import { About } from './components/about/About';


function App() {
  return (
    <div>
    <Switch/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/survival' element={<SurvivalGameMode/>}></Route>
        <Route path='/timer' element={<TimerGameMode/>}></Route>
      </Routes>
      </div>
  );
}

export default App;
