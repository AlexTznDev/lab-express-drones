// Iteration #1
const mongoose = require("mongoose")


const droneSchema = new mongoose.Schema({

    name :String,
    propellers : Number,
    maxSpeed : Number

})


// const drones = [
//     { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
//     { name: "Racer 57", propellers: 4, maxSpeed: 20 },
//     { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
//   ];




const DroneModel = mongoose.model("Drone", droneSchema)

module.exports = DroneModel