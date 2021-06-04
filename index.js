// Dependencies
const fs = require("fs");
const http = require("http");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("trust proxy", "loopback");
app.use(express.static("public"));
app.use(morgan("common"));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

const httpServer = http.createServer(app);

httpServer.listen(5000, () => {
  console.log("Server running on port 5000");
});
