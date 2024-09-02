
import { fetchallusers } from './action/users';
import './App.css';
import Navbar from './comnponent/Navbar/navbar';
import {useEffect,useState} from 'react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Allroutes from './Allroutes'
import { useDispatch } from 'react-redux';


function App() {
  const [sildein,setslidein]=useState(true)
  const dispatch=useDispatch()
useEffect(()=>{
  dispatch(fetchallusers());

},[dispatch])

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
