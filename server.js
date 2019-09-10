const express = require("express");
const router = express.Router();

const carRouter = require("./carRouter")

server.use(express.json())
server.use("/api/carRouter", carRouter)

modules.export = router;