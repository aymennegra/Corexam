const MainExam = require("../models/MainExam.model")
const Question = require("../models/question.model")
const ResponsePDF = require("../models/responsePDF.model")
const upload = require("./upload")


exports.findExamResponses = (req, res) => {
const myID = req.params.examID;

 ResponsePDF.find({ idExam: Number(myID) })
    .then(data => {
      res.send(data);
     // console.log(data+"aaa");
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving My Exams."
      });
    });
};

exports.findResponse = (req, res) => {
  const myID = req.params.resId;
  
   ResponsePDF.findOne({ _id: myID })
      .then(data => {
        res.send(data);
       // console.log(data+"aaa");
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving My Exams."
        });
      });
  };

exports.findExamQuestions = (req, res) => {
const myID = req.params.examID;
 Question.find({ idExam: Number(myID) })
    .then(data => {
      res.send(data);
      console.log(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving My Exams."
      });
    });
};


// Find all published Examens
exports.findMyCorrectorExams = (req, res) => {
  const correctorUsernameVar= req.query.correctorUsername;
  MainExam.find({ correctorUsername: correctorUsernameVar })
    .then(data => {
      res.send(data);
      console.log(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving My Exams."
      });
    });
};

exports.findMyCreatedExams = (req, res) => {
  const examCreator= req.query.examCreator;
  MainExam.find({ examCreator: examCreator })
    .then(data => {
      res.send(data);
      console.log(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving My Exams."
      });
    });
};
async function createResponsePDF(currentReq,idExamen) {
    let responsePDF=[];
    console.log(currentReq);
  currentReq.responsePDF.forEach(element => {
    responsePDF.push(new ResponsePDF({
      idExam:idExamen,
      studentName:element.studentName, // String 
      studentGrade:element.studentGrade, // Number initialized at 0
      studentFile:element.studentFile //PDF File (using multer)
    }))
      let data =  new ResponsePDF (responsePDF[(responsePDF.length-1)])
      result =  data.save();
         // console.log(data)

  }); 
}

async function createQuestions(currentReq,idExamen) {
  let questions=[];
  currentReq.questions.forEach(element => {
    questions.push(new Question({
      idExam:idExamen,
      qName:element.qName, // Question name / String :  "Q1" 
      qMark:0, // Question Mark / Number : 1
      qBarem:element.qMark // Question Mark / Number : 1
    }))
    let data =  new Question  (questions[(questions.length-1)])
    result = data.save();

  });
  
// console.log(responsePDF);
}

async function examIdCounter(req,res) {
/*
var  counter=0;

    MainExam.find()
    .then(data => {
      data.forEach(element => {
        console.log(element);
        ++counter;
      });x
return counter;
    })
    .catch(err => {
   console.log(err);
return  0;
    });
    */

MainExam.countDocuments( {}, function(err, result){
        if(err){
 return 0
        }
        else{
          //console.log(result);
  return result     
 }
   })
};



async function create  (req, res,next){
//Create Questions Array
var dataCount;

reqExamCreator = req.body.examCreator;
reqClassName = req.body.className;
reqSubject = req.body.subject;
reqDate = req.body.date;
reqQuestionNbr = req.body.questionNbr;
reqTotalMark = req.body.totalMark;
reqPDFFile = req.body.pdfFile;
reqCopiesNbr = req.body.copiesNbr;
reqCorrectorUsername = req.body.correctorUsername;
/*
const promise = MainExam.countDocuments().then((myCount)=>{return new Promise((resolve,reject) => {
  let result = Number(myCount);
  resolve(result);
})});
*/
const promise = await MainExam.countDocuments().then(function (result){
   return result + 1;
})


 let mainExam = new MainExam ({id:promise,
 examCreator:reqExamCreator,
  className:reqClassName,
  subject:reqSubject,
  date:reqDate,
  questionNbr:reqQuestionNbr,
totalMark:reqTotalMark,
pdfFile:reqPDFFile,
copiesNbr:reqCopiesNbr,
correctorUsername:reqCorrectorUsername
  })
currentBody = req.body;
/*
const promise = Promise.resolve(examIdCounter()).then(
  ((values) => console.log(values)));
*/
 // EXAM HERE MUST SAVE RESPONSEPDF AND QUESTIONS NOT ONLY SHOW ! PROBLEM !
 //console.log(mainExam); // Afficher l'examen avant l'insertion a la base
 console.log(mainExam)
 mainExam
    .save()
    .then(data => {
      res.send(data);
    //  console.log(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the MainExam."
      });
    });
 // console.log(idExam+ " this is idExam");
 createQuestions(currentBody,mainExam.id);
createResponsePDF(currentBody,mainExam.id);
};

exports.delete = (req, res) => {
  const id = req.params.examID;
  
  MainExam.findOneAndRemove({id: id})
    .then(data => {
      if (!data) {
        ResponsePDF.find({idExam:id}).remove();
         Question.find({idExam:id}).remove();

        res.status(404).send({
          message: `Cannot delete Examen with id=${id}. Maybe Examen was not found!`
        });
      } else {
     console.log(id+"AAAAAAAAA");
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
exports.deleteResponses = (req, res) => {
  const id = req.params.examID;  
  ResponsePDF.find({idExam : id}).remove()
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Responses with id=${id}. Maybe Reponses was not found!`
        });
      } else {
        console.log(data);
        res.send({
          message: "Responses was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Response with id=" + id
      });
    });
};



exports.deleteQuestions = (req, res) => {
  const id = req.params.examID;
  
  Question.find({idExam : id}).remove()
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Questions with id=${id}. Maybe Questions was not found!`
        });
      } else {
        console.log(typeof data);
        res.send({
          message: "Questions was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Questions with id=" + id
      });
    });
};


exports.deleteAll = (req, res) => {
  MainExam.deleteMany({})
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





exports.findAll = (req, res) => {
  const subject = req.query.subject;
  var condition = subject ? { subject: { $regex: new RegExp(subject), $options: "i" } } : {};
  MainExam.find(condition)
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


exports.findOne = (req, res) => {
    const myID = req.params.examID;
    MainExam.findOne({ id: Number(myID) })
        .then(exam => {
            if(!exam) {
                return res.status(404).send({
                    message: "Poem not found with id " + myID
                });
            }
            res.send(exam);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + myID
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + myID
        });
    });
};

exports.update = (req, res) => {
    const myID = req.params.examID;
    console.log(req.body);
    ResponsePDF.updateOne({ _id: myID},{$set:req.body})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Poem not found with id " + myID
                });
            }
            res.send(data);
        }).catch(err => {
        return res.status(500).send({
            message: "Error retrieving note with id " + myID
        });
    });
};

module.exports.create = create;
