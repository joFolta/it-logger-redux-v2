// Using CommonJS's require (can't ES6 import like in React)
const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.get("/", (req, res) => res.send({ msg: "Welcome to it-logger-redux-v2" }));

// Define Routes
app.use("/logs", require("./routes/logs"));
app.use("/techs", require("./routes/techs"));

const PORT = process.env.PORT || 5000; // process.env.PORT for PROD

app.listen(PORT, () => console.log(`Server stated on port ${PORT}...`));
