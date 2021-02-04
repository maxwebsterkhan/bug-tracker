const mongoose = require("mongoose");
const bugSchema = mongoose.Schema({
  title: {
    type: String,
  },
  details: {
    type: String,
  },
  severity: {
    type: String,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  author: {
    type: String,
  },
});

const bug = (module.exports = mongoose.model("bug", bugSchema));
