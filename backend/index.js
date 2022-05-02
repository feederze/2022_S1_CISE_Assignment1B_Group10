const express = require("express");
const server = express();
const connectDB = require("./config/db");
const port = process.env.PORT || 12345;

connectDB();

server.get("/", (req, res) => {
  res.send("yes yes captain");
});

server.listen(port, console.log(`server running on port ${port}`));
