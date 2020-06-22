const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI"); // gets the URI (with database username and pwd) from config/default.json's mongoURI key

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1); // exits with failure
  }
};

// Prerefactored code with .then(), .catch() syntax for the promise

// const connectDB = () => {
//   mongoose
//     .connect(db, {
//       useNewUrlParser: true,
//       // useCreateIndex: true,
//       // useFindAndModify: false,
//       useUnifiedTopology: true,
//     })
//     .then(() => console.log("MongoDB Connected..."))
//     .catch((err) => {
//       console.error(err.message);
//       process.exit(1); // exits with failure
//     });
// };

module.exports = connectDB;
