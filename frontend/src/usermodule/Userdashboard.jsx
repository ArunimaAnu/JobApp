import React from 'react'
import Navuser from './Navuser'
import { Link , useLocation, useNavigate } from 'react-router-dom'

const Userdashboard = (props) => {
  var location = useLocation();
  var name =location.state;
  console.log(name)

  return (
    <div className="user">
      <div className="nav">
      <Navuser></Navuser>
      <br/>
      User Dashboard
      </div>
    </div>
  )
}

export default Userdashboard