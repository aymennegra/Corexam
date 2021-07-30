const mainExam = require("../controllers/mainExam.controller");

module.exports = app => {

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", mainExam.create);

  router.get("/all", mainExam.findAll);
  router.get("/findById/:examID", mainExam.findOne);
  router.put("/update/:examID", mainExam.update);
  router.get("/findResById/:examID", mainExam.findExamResponses);
  router.get("/findResponseByResponseId/:resId", mainExam.findResponse);

   router.get("/findQuesById/:examID", mainExam.findExamQuestions);

  //Retrieve all published Tutorials
  router.get("/:examCreator", mainExam.findMyCreatedExams);

  router.get("/find/:correctorUsername", mainExam.findMyCorrectorExams);

  // Retrieve a single Tutorial with id
  //router.get("/:id", examens.findOne);

  // Update a Tutorial with id
  //router.put("/:id", examens.update);

  // Delete a Tutorial with id
  router.delete("/:examID",mainExam.delete);

  // Create a new Tutorial
  // router.delete("/", examens.deleteAll);

  app.use("/api/MainExam", router);
};
