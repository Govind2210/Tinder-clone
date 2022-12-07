import mongoose from "mongoose";

//Schema :-

const cardSchema = mongoose.Schema({
    name : String ,
    imgUrl : String 

})

export default  mongoose.model('cards' , cardSchema )