 const mongoose = require("mongoose");

const MainExam = mongoose.model(
  "MainExam",
  new mongoose.Schema({
    id:Number,
    examCreator: String,
    className: String,
    subject: String,
    date: Date,
    questionNbr: Number,
    totalMark: Number,
    totalMarkStudent: Number,
    pdfFile: String,
    copiesNbr:Number,
    correctorUsername:String,
    /*
    responsePDF:[
      { type: mongoose.Schema.Types.ObjectId, 
         ref: 'responsePDF' ,
         idExam: Number
      }
    ],
    
    questions: [
      { type: mongoose.Schema.Types.ObjectId, 
      ref: 'Question',
      idExam: Number
      }
    ]
    */
    
  })
);

module.exports = MainExam;
