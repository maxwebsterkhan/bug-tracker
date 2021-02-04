const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/bug", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("open", () => {
  console.log("Connected to mongoDB");
});
db.on("error", (error) => {
  console.log(error);
});

// import bug schema as model
let bugModel = require("./bug_schema");

// ROUTES

app.get("/", (req, res) => {
  res.send("hello");
});

// add bug
app.post("/bug/add", (req, res) => {
  let newBug = new bugModel();
  newBug.title = req.body.bug.title;
  newBug.details = req.body.bug.details;
  newBug.severity = req.body.bug.severity;
  newBug.author = req.body.bug.author;
  newBug.completed = false;

  newBug.save((err) => {
    if (err) {
      console.log(err);
      res.send("Error while adding bug");
    } else {
      console.log(newBug);
      res.send("bug added");
    }
  });
});

// FETCH TO-DO

// completed
app.get("/bug/completed", (req, res) => {
  bugModel.find({ completed: true }, (err, bugs) => {
    if (err) {
      res.send("Error while fetching bugs");
    } else {
      res.json(bugs);
    }
  });
});

// uncompleted
app.get("/bug/uncompleted", (req, res) => {
  bugModel.find({ completed: false }, (err, bugs) => {
    if (err) {
      res.send("Error while fetching bugs");
    } else {
      res.json(bugs);
    }
  });
});

// update
app.post("/bug/complete/:id", (req, res) => {
  bugModel.findByIdAndUpdate(req.params.id, { completed: true }, (err, bug) => {
    if (!err) {
      res.send("Good Work");
    }
  });
});

app.post("/bug/uncomplete/:id", (req, res) => {
  bugModel.findByIdAndUpdate(
    req.params.id,
    { completed: false },
    (err, bug) => {
      if (!err) {
        res.send("Uncompleted");
      }
    }
  );
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

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
