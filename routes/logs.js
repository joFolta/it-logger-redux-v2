const express = require("express");
const router = express.Router();

// @route       GET /logs
// @description Get all IT logs
// @access      Public
router.get("/", (req, res) => {
  res.send("Get logs");
}); // "/" endpoint b/c server.js handles the "/logs" routing to this logs.js file

// @route       POST /logs
// @description Create a new IT log
// @access      Public
router.post("/", (req, res) => {
  // res.send("Create a new IT log");
  res.send(req.body); // body/json enabled by middleware from server.js ....app.use(express.json({ extended: false }));
});

// @route       PUT /logs
// @description Update an IT log
// @access      Public
router.put("/:id", (req, res) => {
  res.send("Update an IT log");
});

// @route       DELETE /logs
// @description Delete an IT log
// @access      Public
router.delete("/:id", (req, res) => {
  res.send("Delete an IT log");
});

// TODO searchLogs
// TODO searchLogs
// TODO searchLogs
// TODO searchLogs
// TODO searchLogs

module.exports = router;
