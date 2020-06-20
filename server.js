// Using CommonJS's require (can't ES6 import like in React)
const express = require("express");
// const connectDB = require("./config/db");
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO
// TODO

const app = express();

app.get("/", (req, res) => res.send("hello world"));

const PORT = process.env.PORT || 5000; // process.env.PORT for PROD

app.listen(PORT, () => console.log(`Server stated on port ${PORT}...`));
