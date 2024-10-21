import React from 'react'
import Navuser from './Navuser'
import { useLocation } from 'react-router-dom';

const Viewappliedjob = (props) => {
  var location = useLocation();
  var name =location.state;
  console.log(name)

  return (
    <div class="user">
     <div class="nav">
      <Navuser></Navuser>
      <br/>
      All Applied Jobs
      </div>
    </div>
  )
}

export default Viewappliedjob