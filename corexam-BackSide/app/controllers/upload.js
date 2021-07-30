const MongoClient = require('mongodb');
var fs = require('fs')
var Readable = require('stream').Readable

const upload = require("../middlewares/upload");
const dbName = "corexam_db";

let url = "mongodb://localhost:27017/corexam_db?retryWrites=true&w=majority";
const uploadFile = async (req, res) => {
  try {
    await upload(req, res);

    //console.log(req.file);
    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
//console.log(req.file.bucketName)
    return res.send(req.file);
  } catch (error) {
    console.log(error);
    return res.status(400).send(`Error when trying upload image: ${error}`);
  }
};

const getFile = (req, res) => { 
  //Accepting user input directly is very insecure and should      
  //never be allowed in a production app.  
  //Sanitize the input before accepting it  
  //This is for demonstration purposes only  
  
  let fileName = req.params.name;  
  
  //Connect to the MongoDB client
 
    MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, function(err, client){
        if(err){      
         return res.render(500, 
          {
          title: 'Uploaded Error', 
          message: 'MongoClient Connection error', error: err.errMsg});    
             }    
    const db = client.db(dbName);
    const collection = db.collection('fs.files');    
    const collectionChunks = db.collection('fs.chunks');
collection.find({filename :fileName}).toArray(function(err, docs){       
    if(err){        
      return res.render(500, {
       title: 'File error', 
       message: 'Error finding file', 
        error: err.errMsg});      
    }
  if(!docs || docs.length === 0){        
    return console.log("MAFAMSHAY")    ;
   }else{
   //Retrieving the chunks from the db          
   collectionChunks.find({files_id : docs[0]._id})
     .sort({n: 1}).toArray(function(err, chunks){          
       if(err){            
          return res.render('index', {
           title: 'Download Error', 
           message: 'Error retrieving chunks', 
           error: err.errmsg});          
        }
      if(!chunks || chunks.length === 0){            
        //No data found            
        return res.render('index', {
           title: 'Download Error', 
           message: 'No data found'});          
      }
    
    let fileData = [];          
    for(let i=0; i<chunks.length;i++){            
      //This is in Binary JSON or BSON format, which is stored               
      //in fileData array in base64 endocoded string format               
     
      fileData.push(chunks[i].data.toString('base64'));          
    }
    
     //Display the chunks using the data URI format          
     let finalFile = fileData.join('');               
/*
const imgBuffer = Buffer.from(finalFile, 'base64')
var s = new Readable()
s.push(imgBuffer)   
s.push(null) 
s.pipe(fs.createWriteStream("test.png"));

      res.send(s.pipe(fs.createWriteStream("test.png")));
      */
fs.writeFile(`C:/Users/Fabio/Desktop/corexam-FrontSide/src/assets/files/${docs[0].filename}`,finalFile,{encoding:'base64'},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("file created")
  }
})
  });      
    }          
   });  
 });
};
module.exports = {
  uploadFile: uploadFile,
  getFile:getFile
};