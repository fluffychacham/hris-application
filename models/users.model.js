const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: [
    {
      type: Schema.Types.ObjectId,
      ref: "roles"
    }
  ],
  company: [
    {
      type: Schema.Types.ObjectId,
      ref: "companies"
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("Users", userSchema);
