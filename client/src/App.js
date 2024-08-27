import logo from './logo.svg';
import './App.css';
import Navbar from './comnponent/Navbar/navbar';
import {useEffect,useState} from 'react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Allroutes from './Allroutes'

function App() {
  const [sildein,setslidein]=useState(true)
  useEffect(()=>{
    if(window.innerWidth <= 768){
      setslidein(false)
    }
  },[])
  const handleslidein=()=>{
    if(window.innerWidth <= 768){
      setslidein((state)=>!state);
    }
    
  };
  return (
    <div className="App">
      <Router>
      <Navbar handleslidein={handleslidein}/>
      <Allroutes sildein={sildein} handleslidein={handleslidein}/>
      </Router>
    </div>
  );
}

export default App;
