const mongoose=require("mongoose")

const connect=()=>{

    return mongoose.connect("mongodb+srv://amit:1234@cluster0.flsypl6.mongodb.net/cointab")

}

module.exports=connect