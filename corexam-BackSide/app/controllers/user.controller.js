const User = require("../models/user.model")



exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.findAll = (req,res) => {
User.find()
.then(data => {
    res.send(data)
     } )
     .catch(err => {
         res.status(500).send({
             message:
             err.message || "Some error occured while retrieving USERS "
         })
     })
}
