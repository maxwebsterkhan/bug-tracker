const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

let bugModel = require("./bug_schema");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

mongoose.connect("mongodb://localhost:27017/bugApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("open", () => {
  console.log("Connected to mongoDB");
});
db.on("error", (error) => {
  console.log(error);
});

// post

app.post("/bug/add", (req, res) => {
  let newBug = new bugModel();
  newBug.issue = req.body.issue;
  newBug.message = req.body.message;
  newBug.priority = req.body.priority;
  newBug.save((err) => {
    if (err) {
      res.send("Error while adding bug");
    } else {
      res.send("bug added");
    }
  });
});

// completed bugs
app.get("/bug/completed", (req, res) => {
  bugModel.find({ completed: true }, (err, bugs) => {
    if (err) {
      res.send("Error while fetching bugs");
    } else {
      res.json(bugs);
    }
  });
});

// uncompleted bugs

app.get("/bug/uncompleted", (req, res) => {
  bugModel.find({ completed: false }, (err, bugs) => {
    if (err) {
      res.send("Error while fetching bugs");
    } else {
      res.json(bugs);
    }
  });
});

// update bugs

app.post("/bug/complete/:id", (req, res) => {
  bugModel.findByIdAndUpdate(req.params.id, { completed: true }, (err, bug) => {
    if (!err) {
      res.send("Good Work");
    }
  });
});

// delete bug

app.delete("/bug/:id", (req, res) => {
  let query = { _id: req.params.id };
  bugModel.deleteOne(query, (err) => {
    if (err) {
      res.send("Error while deleting bug");
    } else {
      res.send("bug deleted");
    }
  });
});
