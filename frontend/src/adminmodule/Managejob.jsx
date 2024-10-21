import Navadmin from './Navadmin'
import { Box, Typography, Button, TextField } from '@mui/material'
import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Managejob = (props) => {

  var [inputs, setInputs] = useState({ Jobname: "", Description: "", Reqirements: "", Location: "", Salary: "", Jobtype: "" });
  var location = useLocation();
  var navigate = useNavigate()
  const JobHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };

  const addJob = () => {
    axios.post("http://localhost:3005/jobadd", inputs,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      }
    ).then((res) => {
      console.log(res.data.message)
      alert(res.data.message);
    }).catch((err) => {
      console.log(err);
    });
  }
  return (
    <div class="adminn">
      <div class="nav">
        <Navadmin></Navadmin>
        <br />
        <div class="sign" >
          <Box component="form" noValidate>
            <Typography variant='h4'>ADD NEW JOB LISTING</Typography><br />
            <TextField
              label='Job Name'
              variant='filled'
              onChange={JobHandler}
              name="Jobname"
              value={inputs.Jobname}></TextField><br></br><br></br>
            <TextField
              label='Description'
              variant='filled'
              onChange={JobHandler}
              name="Description"
              value={inputs.Description}></TextField><br></br><br></br>
            <TextField
              label='Reqirements'
              variant='filled'
              onChange={JobHandler}
              name="Reqirements"
              value={inputs.Reqirements}></TextField><br></br><br></br>
            <TextField
              label='Location'
              variant='filled'
              onChange={JobHandler}
              name="Location"
              value={inputs.Location}></TextField><br></br><br></br>
            <TextField
              label='Salary'
              variant='filled'
              onChange={JobHandler}
              name="Salary"
              value={inputs.Salary}></TextField><br></br><br></br>
            <TextField
              label='Job Type'
              variant='filled'
              onChange={JobHandler}
              name="Jobtype"
              value={inputs.Jobtype}></TextField><br></br><br></br>

            {/* <Link to='/admindash'> */}
            <Button
              variant='contained'
              onClick={addJob}>Add</Button>
            {/* </Link> */}
            <br /><br />
            <Link to='/'>
              <Button variant='contained'>Home</Button></Link>&nbsp;
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Managejob