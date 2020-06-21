const express = require("express");
const router = express.Router();

// @route       GET /techs
// @description Get all technicians
// @access      Public
router.get("/", (req, res) => {
  res.send("Get all technicians");
}); // "/" endpoint b/c server.js handles the "/logs" routing to this logs.js file

// @route       POST /techs
// @description Add new technician
// @access      Public
router.post("/", (req, res) => {
  res.send("Add technician");
});

// @route       DELETE /techs
// @description Delete technician
// @access      Public
router.delete("/:id", (req, res) => {
  res.send("Technician deleted");
});

module.exports = router;
