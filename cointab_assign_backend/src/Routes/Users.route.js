const { default: axios } = require("axios");
const express =require("express");
const Users= require("../Modal/Users.modal")

const app=express.Router();

// To store users in mongoDB (fetch users button command-"BEGIN")

app.get("/",async(req,res)=>{

    try{
        
        const data= await axios.get("https://randomuser.me/api/?page=1&results=50")

        Users.collection.deleteMany()

        let userData= await Users.create(data.data.results);

        // console.log(userData)

        // let x= await Users.find()

        // console.log("x:",x)

        res.send("Users Fetched in database: Done");

      }
      catch(err){
      
        res.send(err)
      }


});



app.delete("/",async(req,res)=>{

    try{

        Users.collection.deleteMany()

        res.send("Users database deletion: Done");

    }
    catch(err){
    
      res.send(err)
    }


});

// To store users in mongoDB (fetch users button command-"END")

/////////////////////////////// --------- --------- /////////////////////////////////

// To get data for frontend from mongoDB (User detail button command with pagination feature-"BEGIN")

app.get("/details",async(req,res)=>{

        let {page,filter}=req.query

    try{

        console.log(page,filter)

        if(filter==="male" || filter==="female"){

            let len=(await Users.find({gender: filter})).length

            let data= await Users.find({gender: filter}).skip(page*10-10).limit(10);

            return res.send({len,data});


        }

        let len=(await Users.find()).length

        let data= await Users.find().skip(page*10-10).limit(10);

        res.send({len,data});

      }
      catch(err){
      
        res.send(err)
      }


});


// To get data for frontend from mongoDB (User detail button command with pagination feature-"END")


module.exports=app;