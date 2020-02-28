require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const mongoDB = process.env.URL_MONGO;
const routes = require("./routes");
const db = mongoose.connect(
  mongoDB,
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  }
);

const server = new express();

server.use(cors());
server.use(bodyParser.json());
server.use(routes);

server.listen(process.env.PORT, console.log("Servidor Rodando"));
