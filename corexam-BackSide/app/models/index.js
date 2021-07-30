const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.exam = require("./exam.model.js")
db.examen = require("./examen.model.js");

db.ROLES = ["admin"];

module.exports = db;   