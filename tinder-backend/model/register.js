import mongoose from "mongoose";

const registerSchema =  mongoose.Schema({
    name : String ,
    email : String ,
    passowrd : String
})

export default mongoose.model("register" , registerSchema)
