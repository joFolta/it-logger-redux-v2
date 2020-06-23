const express = require("express");
const router = express.Router();

const Log = require("../models/Log");

// @route       GET /logs
// @description Get all IT logs
// @access      Public
router.get("/", async (req, res) => {
  // res.send("Get logs");
  try {
    const logs = await Log.find({});
    res.json(logs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error. Unable to get logs. ");
  }
}); // "/" endpoint b/c server.js handles the "/logs" routing to this logs.js file

// @route       POST /logs
// @description Create a new IT log
// @access      Public
router.post("/", async (req, res) => {
  // res.send("Create a new IT log");

  const { message, attention, tech, date } = req.body;
  try {
    const newLog = new Log({
      message, // message: message,
      attention,
      tech,
      date,
    });

    const log = await newLog.save(); // save log to db

    res.json(log); // return log to client (why on a POST?; we have GET /logs"); standard procedure...?
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error. Unable to add log. ");
  }

  // res.send(req.body); // body/json enabled by middleware from server.js ....app.use(express.json({ extended: false }));
});

// @route       PUT /logs
// @description Update an IT log
// @access      Public
router.put("/:id", async (req, res) => {
  // res.send("Update an IT log");
  const { message, attention, tech, date } = req.body;

  // Build log object
  const logFields = {}; // can't use new Log({}) here b/c it'll generate a new `_id`, which is immutable
  if (message) logFields.message = message;
  if (attention) logFields.attention = attention;
  if (tech) logFields.tech = tech;
  if (date) logFields.date = date;

  try {
    const log = await Log.findByIdAndUpdate(
      req.params.id,
      {
        $set: logFields,
      },
      { new: true }
    );
    res.json(log);
  } catch (err) {
    console.error(err.message); // message for the server (viewable in terminal)
    res.status(500).send("Server Error. Unable to edit log. ");
  }
});

// @route       DELETE /logs
// @description Delete an IT log
// @access      Public
router.delete("/:id", async (req, res) => {
  // res.send("Delete an IT log");
  try {
    await Log.findByIdAndRemove(req.params.id);

    res.json({ msg: "Log removed from database. " }); // unused response
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error. Unable to delete log. ");
  }
});

module.exports = router;
