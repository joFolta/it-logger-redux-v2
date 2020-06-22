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
  data: {
    type: Date,
    required: true,
    // default: Date.now,
  },
});

module.exports = mongoose.model("log", LogSchema);
