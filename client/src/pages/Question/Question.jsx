import React from 'react'
import Leftsidebar from '../../comnponent/Leftsidebar/Leftsidebar'
import Rightsidebar from '../../comnponent/Rightsidebar/Rightsidebar'
import Homemainbar from '../../comnponent/Homemainbar/Homemainbar'
import '../../App.css'

const Question = ({slidein}) => {
  return (
    <div className="home-container-1">
        <Leftsidebar slidein={slidein}/>
        <div className="home-container-2">
            <Homemainbar/>
            <Rightsidebar/>
        </div>
    </div>
  )
}

export default Question
