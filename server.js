// Using CommonJS's require (can't ES6 import like in React)
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false })); // allows body data to be accepted by server (equivalent of body-parser package; now build into express)

// Define Routes
app.use("/logs", require("./routes/logs"));
app.use("/techs", require("./routes/techs"));

// Serve static assets in production
if (process.env.NODE_ENV == "production") {
  // Load static folder
  app.use(express.static("client/build")); // build folder will be created when heroku runs `npm run build`

  // All GET requests should load index.html
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  ); // __dirname means current directory, then client folder, build folder, and then load index.html
}

const PORT = process.env.PORT || 5000; // process.env.PORT for PROD

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
