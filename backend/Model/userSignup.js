const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true
  },

  password: {
    type: String,
    required: true
  },
  confirmpassword: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", signupSchema);
