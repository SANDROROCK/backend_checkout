require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const mongoDB = process.env.URL_MONGO;

const db = mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useFindAndModify: true
});

const Rota = require("./routes");

const server = new express();

server.use(cors());
server.use(bodyParser.json());
server.use(Rota());

server.listen(3525, console.log("Servidor Rodando"));
