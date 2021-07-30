const mongoose = require("mongoose");

const Question = mongoose.model(
  "Question",
  new mongoose.Schema({
    qName: String,
    qMark: Number,
    qBarem: Number,
    idExam: Number
  })
);
module.exports = Question;
