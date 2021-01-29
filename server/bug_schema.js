const mongoose = require("mongoose");
const bugSchema = mongoose.Schema({
  title: {
    type: String,
  },
  details: {
    type: String,
  },
  priority: {
    type: String,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

const bug = (module.exports = mongoose.model("bug", bugSchema));
