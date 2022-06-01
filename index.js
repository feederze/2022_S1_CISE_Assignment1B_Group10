require("dotenv").config({path: './.env'});
const port = process.env.PORT || 12345;

const connectDB = require("./config/db");
const path = require("path");
const express = require("express");
var cors = require('cors');

const articles = require("./routes/api/articles");
const server = express();


connectDB();


server.use(cors({ origin: true, credentials: true }));
server.use(express.json({ extended: false }));
server.use('/api/article',articles);

server.use(express.static(path.join(__dirname, "/frontend/build")));
server.get('*', (req,res) => {
        res.sendFile(path.join(__dirname,'frontend','build','index.html'));
});

// server.get("/", (req, res) => {
//   res.send("yes yes captain");
// });

server.listen(port, console.log(`server running on port ${port}`));
