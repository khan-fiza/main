import React from 'react'
import './Users.css'
import User from './User'
import {useSelector} from 'react-redux'
const Userslist = () => {
    const users=useSelector((state)=>state.usersreducer)
    console.log(users)
  return (
    <div className="user-list-container">
    {users.map(item => {
      if (item.name) {
        // Render User component for user objects
        return <User user={item} key={item._id} />;
      }
      // Handle other types (e.g., questions) as needed
      return null; // or render a different component
    })}
  </div>

  )
}

export default Userslist