const express = require("express");
const server = express();

const carRouter = require("./carRouter")

server.use(express.json())
server.use("/api/carRouter", carRouter)

server.get("/", (req, res) => {
  res.send("GET TEST SUCCESSFUL!")
})

module.exports = server;