const express = require("express");
const router = express.Router();

const Tech = require("../models/Tech");

// @route       GET /techs
// @description Get all technicians
// @access      Public
router.get("/", async (req, res) => {
  // res.send("Get all technicians");
  try {
    const techs = await Tech.find({});
    res.json(techs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error. Unable to get techs. ");
  }
}); // "/" endpoint b/c server.js handles the "/logs" routing to this logs.js file

// @route       POST /techs
// @description Add new technician
// @access      Public
router.post("/", async (req, res) => {
  // res.send("Add technician");

  const { firstName, lastName } = req.body;
  try {
    const newTech = new Tech({
      firstName,
      lastName,
    });

    const tech = await newTech.save(); // save tech to db

    res.json(tech); // return tech to client (why on a POST?; we have GET /logs"); standard procedure...?
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error. Unable to add technician. ");
  }
  // res.send(req.body); // body/json enabled by middleware from server.js ....app.use(express.json({ extended: false }));
});

// @route       DELETE /techs
// @description Delete technician
// @access      Public
router.delete("/:id", async (req, res) => {
  // res.send("Technician deleted");
  try {
    await Tech.findByIdAndRemove(req.params.id);

    res.json({ msg: "Technician removed from database. " }); // unused response
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error. Unable to delete technician. ");
  }
});

module.exports = router;
