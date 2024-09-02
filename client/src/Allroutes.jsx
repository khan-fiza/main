import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Askquestion from './pages/Askquestion/Askquestion'
import Auth from './pages/Auth/Auth'
import Question from './pages/Question/Question'
import Displayquestion from './pages/Question/Displayquestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import Userprofile from './pages/Userprofile/Userprofile'

function Allroutes({ slidein, handlesidein }) {
  return (
    <Routes>
      <Route path='/' element={<Home slidein={slidein} handlesidein={handlesidein} />}/>
      <Route path='/Askquestion' element={<Askquestion />}/>
      <Route path='/Auth' element={<Auth />}/>
      <Route path='/Question' element={<Question slidein={slidein} handlesidein={handlesidein} />}/>
      <Route path='/Question/:id' element={<Displayquestion slidein={slidein} handlesidein={handlesidein} />}/>
      <Route path='/Tags' element={<Tags slidein={slidein} handlesidein={handlesidein} />}/>
      <Route path='/Users' element={<Users slidein={slidein} handlesidein={handlesidein} />}/>
      <Route path='/Users/:id' element={<Userprofile slidein={slidein} handlesidein={handlesidein} />}/>






      
    </Routes>
  )
}

export default Allroutes
