const { default: axios } = require("axios");
const express =require("express");
const Users= require("../Modal/Users.modal")

const app=express.Router();

app.get("/",async(req,res)=>{

    try{
        
        const data= await axios.get("https://randomuser.me/api/?page=1&results=50")

        Users.collection.remove()

        let userData= await Users.create(data.data.results);

        // console.log(userData)

        let x= await Users.find()

        // console.log("x:",x)

        res.send(x);

      }
      catch(err){
      
        res.send(err)
      }


});




module.exports=app;