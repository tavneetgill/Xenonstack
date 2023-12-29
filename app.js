const express = require("express")
const collection = require("./mongo")
const Contact = require("./contactdata");
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/contact", async (req, res) => {
    const { email, message } = req.body;
  
    try {
      // Save contact form data to MongoDB
      const newContact = new Contact({ email, message });
      await newContact.save();
  
      res.status(200).json({ success: true, message: "Message saved successfully" });
    } catch (error) {
      console.error("Error saving message:", error);
      res.status(500).json({ success: false, message: "Error saving message" });
    }
  });

app.listen(8000,()=>{
    console.log("port connected");
})