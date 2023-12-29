const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://gilltavneet:tavneet2@cluster0.kj7qvsc.mongodb.net/xenonstack?retryWrites=true&w=majority")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });


const Schema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",Schema)

module.exports=collection
