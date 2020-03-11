const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const PORT = 8080;

const logger = (req, res, next) => {
  console.log(
    `${Date(Date.now()).toString()}: ${req.method} request to ${
      req.path
    } from ${req.ip}`
  );
  next();
};

// Sample data
let posts = [
  {
    id: 1,
    name: "Beispielpost",
    date: Date("2019-12-25T"),
    content: "Dies ist der erste vom Server bereitgestellte Beispielpost.",
    author: "Ole Maiwald"
  }
];

let lastID = 2;

// Parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// API endpoints
app.get("/", logger, (req, res) => {
  res.json({ message: "Welcome to the simpleServer API!" });
});

app.get("/post", logger, (req, res) => {
  res.json({ posts });
});

app.post("/post", logger, (req, res) => {
  let post = {
    id: ++lastID,
    name: req.body.name,
    date: Date(Date.now()),
    content: req.body.content,
    author: req.body.author
  };
  posts.push(post);

  res.json({ message: "Creation successful!" });
});

app.delete("/post/:id", logger, (req, res) => {
  posts = posts.filter(post => post.id != req.params.id);

  res.json({ message: "Deletion successful!" });
});

// Start server
app
  .listen(PORT, function() {
    console.log(`Server listening on Port ${PORT}`);
  })
  .on("error", console.log);
