const util = require("util");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");

var storage = new GridFsStorage({

  url: "mongodb://localhost:27017/corexam_db?retryWrites=true&w=majority",
  options: { useNewUrlParser: true, useUnifiedTopology: true },


  file: (req, file) => {
    const match = ["image/png", "image/jpeg" ,"file/pdf"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "files",
      filename: `${file.originalname}`
    };
  }

});






var uploadFile = multer({ storage: storage }).single("file");
var uploadFilesMiddleware = util.promisify(uploadFile);
module.exports = uploadFilesMiddleware;