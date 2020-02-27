const { Router } = require("express");

const Rota = Router();

Rota.get("/", (req, res) => {
  return res.send({
    message: "Tudo Certo"
  });
});

module.exports = Rota;
