const mongoose = require("mongoose");

var roles = new mongoose.Schema({
  admin: {
    type: Boolean,
    default: false
  },
  hr: {
    type: Boolean,
    default: false
  },
  employee: {
    type: Boolean,
    default: true
  }
});

mongoose.model("roles", roles);
