import './App.css';
import React from 'react';
import Home from './components/home/Home'
import {Routes, Route} from 'react-router-dom'
import Target from './components/target/Target';


function App() {
  return (
    <div>
      <Routes>        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/game' element={<Target/>}></Route>
      </Routes>
      </div>
  );
}

export default App;
