import express from 'express'
import mongoose  from 'mongoose'
import cors from 'cors'
import Cards from "./dbCards.js"
import register from "./model/register.js"


// App config -1
const app = express();
const port = process.env.PORT || 8080
const connection_url = 'mongodb://GovindLowanshi:Gogo12345678@ac-lf8l7ow-shard-00-00.8xtbry4.mongodb.net:27017,ac-lf8l7ow-shard-00-01.8xtbry4.mongodb.net:27017,ac-lf8l7ow-shard-00-02.8xtbry4.mongodb.net:27017/Tinderdb?ssl=true&replicaSet=atlas-1ekcb7-shard-0&authSource=admin&retryWrites=true&w=majority'

// Middlewares - 5
app.use(express.json())
app.use(cors())

// DB config - 4 // open mongodb -> make db , copy link -> paste c-url // here -> schema
mongoose.connect(connection_url , {
  
})


// Api Endpoint -2
app.get("/" , (req ,res) =>{
    res.status(200).send("hellow Aditi")
})

  // after schema-->

  //--> create api 

app.post('/tinder/cards' , (req ,res) =>{
    const dbCard = req.body
    Cards.create(dbCard , (err , data) =>{
        try {
            res.status(200).send(data)
        } catch (error) {
            res.status(500).send(error.message)
        }
    })
})

// get api

app.get("/tinder/cards" , (req , res) =>{
   Cards.find((err , data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
   })
    
    
})

// post  api for register user 

app.post("/register" , async (req ,res)=>{
    const {name , email , password} = req.body

    if(!name || !email || !password){
        res.status(422).json({error: "Please filled the field properly"})
    }
    try {
        let userExist = await  register.findOne({email : email})
        if(userExist){
            return res.status(422).json({error : "Email Already Exists !"})
        }   
        else{
            const user = new register({name ,email   ,password })
        // hasing the pw -- while using bycrpt
         await user.save()

        res.status(201).json({message : "User is register Sucessfull"})
    
        }
    } catch (error) {
        console.log(error)    
    }

})

// login api for user

app.post("/login" , async (req ,res)=>{
    console.log(req.body)
    try {
        const  {email , password} = req.body ;

        if(!email || !password){
            return res.status(400).json({message : "plz Filled the data"})
        }

        const userLogin = await register.findOne({email : email})

        if(userLogin){
            res.status(200).json({message : "User signIn Sucessfully"})
        }
        else{
            res.status(400).json({message : "please Register YourSelf First"})
        }
    } catch (error) {
        console.log(error)
    }
})

// Listners - 3
app.listen(port , () => console.log(`Listening on localHost : ${port}`))