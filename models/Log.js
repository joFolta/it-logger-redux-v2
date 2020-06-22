const mongoose = require("mongoose");

const LogSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  attention: {
    type: Boolean,
    required: true,
  },
  tech: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    // default: Date.now,
  },
});

module.exports = mongoose.model("log", LogSchema, "logs"); // third param explicitly sets the name, otherwise mongoose tries to pluralize things, which can go wrong (tech -> teches)
