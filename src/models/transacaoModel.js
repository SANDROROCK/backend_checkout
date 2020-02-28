const mongoose = require("mongoose");

const TransactionModel = new mongoose.Schema({
  idTransacao: {
    type: String
  },
  dateTransactio: {
    type: Date
  },
  value: {
    type: Number
  }
});

module.exports = mongoose.model("Transaction", TransactionModel);
