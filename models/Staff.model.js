const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema(
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

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
