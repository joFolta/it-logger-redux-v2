const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI"); // gets the URI (with database username and pwd) from config/default.json's mongoURI key
