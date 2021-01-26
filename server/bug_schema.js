const mongoose = require("mongoose");
const bugSchema = mongoose.Schema({
  issue: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
});

const bug = (module.exports = mongoose.model("bug", bugSchema));
