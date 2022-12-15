const mongoose = require("mongoose");

//  const atlasUrl = ''
 const localUrl = ""
 
module.exports = mongoose.connect(localUrl , {})
  .then((result)=>{
    console.log("db connected");
    // console.log(result);
}).catch((err)=>{
    console.log("connection failed");
    console.log(err);
});