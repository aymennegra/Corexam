const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const util = require("util");

const mongoose = require("mongoose");

const responsePDF = mongoose.model(
  "responsePDF",
  new mongoose.Schema({
    studentName: String,
    studentFile: String,
    studentGrade: Number,
    idExam: Number,
   studentQuestions:[
    {idExamQ: Number,
     qName:String,
     qMark:Number,
     qBarem:Number
    }]
                  })
);


module.exports = responsePDF;

