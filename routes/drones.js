const express = require("express");
const router = express.Router();

const DroneModel = require("../models/Drone.model");
// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DroneModel.find()

    .then((response) => {
      console.log(response);

      res.render("drones/list.hbs", {
        allDrones: response,
      });
    })

    .catch((error) => {
      next(error);
    });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", async (req, res, next) => {
  console.log(req.body);

  // DroneModel.create({
  //   name: req.body.name,
  //   propellers: req.body.propellers,
  //   maxSpeed: req.body.maxSpeed,
  // })
  //   .then((response) => {
  //     console.log(response);
  //     res.redirect("/drones");
  //   })
  //   .catch((error) => {
  //     next(error);
  //   });

  try {
    const response = await DroneModel.create({
      name: req.body.name,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed,
    });

    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

router.get("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  DroneModel.findById(id)
    .then((response) => {
      res.render("drones/update-form.hbs", {
        allDrones: response,
      });
    })
    .catch((error) => {
      next(error);
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;

  DroneModel.findByIdAndUpdate(id, {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  })
    .then((response) => {
      res.redirect("/drones");
    })

    .catch((error) => {
      next(error);
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  const { id } = req.params;

  DroneModel.findByIdAndDelete(id)
.then((response)=>{
res.redirect('/drones')
})
.catch((error)=>{
next(error)
})


});

module.exports = router;
