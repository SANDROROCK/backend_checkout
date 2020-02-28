const routes = require("express").Router();
const ControllerTransacao = require("./controllers/ControllerTransacao");

routes.get("/payments", ControllerTransacao.checkout);

module.exports = routes;
