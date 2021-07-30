/*
module.exports = app => {
  const examens = require("../controllers/examen.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", examens.create);

  // Retrieve all Tutorials
  router.get("/all", examens.findAll);

  // Retrieve all published Tutorials
  router.get("/published", examens.findAllPublished);

  // Retrieve a single Tutorial with id
  //router.get("/:id", examens.findOne);

  // Update a Tutorial with id
  //router.put("/:id", examens.update);

  // Delete a Tutorial with id
  //router.delete("/:id", examens.delete);

  // Create a new Tutorial
  router.delete("/", examens.deleteAll);

  app.use("/api/examens", router);
};
