import './App.css';
import React from 'react';
import Home from './components/home/Home'
import {Routes, Route} from 'react-router-dom'
import Target from './components/target/Target';
import Switch from './components/switchOscuroClaro/Switch';
import SurvivalGameMode from './components/survivalGameMode/SurvivalGameMode'


function App() {
  return (
    <div>
    <Switch/>
      <Routes>
        <Route path='/survival' element={<SurvivalGameMode/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/timer' element={<Target/>}></Route>
      </Routes>
      </div>
  );
}

export default App;
