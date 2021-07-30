 /*
 const mongoose = require("mongoose");

const Exam = mongoose.model(
  "Exam",
  new mongoose.Schema({
   
    subject: String,
    date: String,
    questionNbr: Number,
    totalMark: Number,
    pdfFile: String,
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
      }
    ],
    
  })
);

module.exports = Exam;
*/