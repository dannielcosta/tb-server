const mongoose = require("mongoose");

const staffSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    Availability: {
      type: Map,
      of: [String],
    }
  }
  
);

const User = model("Staff", staffSchema);

module.exports = User;
