// import express
const express = require('express')
require("./connection")
//import cors
const cors = require('cors')
//import models
var logModel = require('./model/logindet')
var JobsModel = require('./model/jobdetail')
// 2. initialize and ....
const app = new express()
// middleware
app.use(express.json())
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true
}
app.use(cors(corsOptions))
// 3. Api creation
app.get('/', (req, res) => {
  res.send('Welcome')
})
// 4. set a port
app.listen(3005, () => {
  console.log('port is running')
})
//api to add login details
app.post("/loginadd", async (req, res) => {
  try {
    await logModel(req.body).save();
    res.send({ message: "Data added!!" });
  } catch (error) {
    console.log(error);
  }
});

// api to view login details
app.get("/loging", async (req, res) => {
  try {
    // const { Email } = req.body;
    var data = await logModel.find({ });
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

//api to add jobs by admin details
app.post("/jobadd", async (req, res) => {
  try {
    await JobsModel(req.body).save();
    res.send({ message: "Data added!!" });
  } catch (error) {
    console.log(error);
  }
});

//to view all jobs
app.get("/view", async (req, res) => {
  try {
    var data = await JobsModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

//to delete
app.delete("/remove/:id", async (req, res) => {
  try {
     await JobsModel.findByIdAndDelete(req.params.id)
     res.send({message:"Deleted successfully!!!"})
  } catch (error) {
      console.log(error)
  }
});