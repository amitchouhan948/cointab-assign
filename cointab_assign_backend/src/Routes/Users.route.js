const { default: axios } = require("axios");
const express =require("express");


const app=express.Router();

app.get("/",async(req,res)=>{

    try{
        
        const data= await axios.get("https://randomuser.me/api/?page=1&results=10")

        console.log(data.data);

        res.send(data.data);

      }
      catch(err){
      
        res.send(err)
      }


});




module.exports=app;