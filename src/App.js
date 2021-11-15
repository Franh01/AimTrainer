import './App.css';
import React from 'react';
// import Target from './components/target/Target'
import TargetSpawn from './components/target-spawn/TargetSpawn';
import Home from './components/home/Home'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/game' element={<TargetSpawn/>}></Route>
      </Routes>
      </div>
  );
}

export default App;
