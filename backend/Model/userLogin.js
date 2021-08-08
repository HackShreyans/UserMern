const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("User", loginSchema);
