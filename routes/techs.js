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
    // TODO GET NOT WORKING, returns empty array
    // TODO GET NOT WORKING, returns empty array
    // TODO GET NOT WORKING, returns empty array
    // TODO GET NOT WORKING, returns empty array
    // TODO GET NOT WORKING, returns empty array
    // TODO GET NOT WORKING, returns empty array
    // TODO GET NOT WORKING, returns empty array
    // TODO GET NOT WORKING, returns empty array
    // TODO GET NOT WORKING, returns empty array
    // TODO GET NOT WORKING, returns empty array
    // TODO GET NOT WORKING, returns empty array
    // TODO GET NOT WORKING, returns empty array
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error. Unable to get techs. ");
  }
}); // "/" endpoint b/c server.js handles the "/logs" routing to this logs.js file

// @route       POST /techs
// @description Add new technician
// @access      Public
router.post("/", (req, res) => {
  // res.send("Add technician");
  res.send(req.body); // body/json enabled by middleware from server.js ....app.use(express.json({ extended: false }));
});

// @route       DELETE /techs
// @description Delete technician
// @access      Public
router.delete("/:id", (req, res) => {
  res.send("Technician deleted");
});

module.exports = router;
