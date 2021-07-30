
const db = require("../models");
const Examen = require("../models/exam.model")

//const Examen = db.examen;

// Create and Save a new Examen

exports.create = (req, res,next) => {
    // Validate request
 let exam = new Examen ({
    subject: req.body.subject,
    date: req.body.date,
    questionNbr: req.body.questionNbr,
    totalMark: req.body.totalMark
    
   //questions.qName: req.body.questions[0].qName
   //questions.qMark: req.body.qMark

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
};



// Retrieve all Examens from the database.
exports.findAll = (req, res) => {
  const subject = req.query.subject;
  var condition = subject ? { subject: { $regex: new RegExp(subject), $options: "i" } } : {};

  Examen.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Examens."
      });
    });
};

// Find a single Examen with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Examen.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Examen with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Examen with id=" + id });
    });
};


// Update a Examen by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Examen.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Examen with id=${id}. Maybe Examen was not found!`
        });
      } else res.send({ message: "Examen was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Examen with id=" + id
      });
    });
};


/*
// Delete a Examen with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Examen.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Examen with id=${id}. Maybe Examen was not found!`
        });
      } else {
        res.send({
          message: "Examen was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Examen with id=" + id
      });
    });
};
*/

// Delete all Examens from the database.
exports.deleteAll = (req, res) => {
  Examen.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Examens were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Examens."
      });
    });
};


