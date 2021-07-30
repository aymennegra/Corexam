/*
const Exam = require("../models/exam.model")
const Question = require("../models/question.model")


exports.create = (req, res,next) => {
    // Validate request
 let exam = new Exam ({
    subject: req.body.subject,
    date: req.body.date,
    questionNbr: req.body.questionNbr,
    totalMark: req.body.totalMark,
    
   questions_qMark: req.body.questions

  })
  console.log(req.body)
 
 console.log(exam)
 exam
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Exam."
      });
    });
};*/