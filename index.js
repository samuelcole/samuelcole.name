// Dependencies
const fs = require("fs");
const http = require("http");
const https = require("https");
const express = require("express");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

// Starting both http & https servers
const httpServer = http.createServer(app);

httpServer.listen(5000, () => {
  console.log("Server running on port 5000");
});
