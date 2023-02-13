// Iteration #1
require ("../db")


const DroneModel = require("../models/Drone.model")
const droneArr =require("./drones.seed.js")



DroneModel.insertMany(droneArr)
.then((response)=>{

})
.catch((error)=>{
next(error)
})
