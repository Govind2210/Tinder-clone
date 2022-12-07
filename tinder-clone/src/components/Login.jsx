import axios from 'axios'
import React from 'react'
import { useState ,useEffect } from 'react'
import { Link , useNavigate } from "react-router-dom"

function Login() {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate()

    
    const loginHandler = async (e) =>{

      // console.log(email , password)

      let result = await fetch("https://tinder-bygovind.herokuapp.com/login" ,{
        method : 'post',
        body : JSON.stringify({email , password}),
        headers : {
          'Content-Type' : "application/json"
        }
      });
      result = await result.json()
      console.log(result)
      if(result.message == 'User signIn Sucessfully' ){
        console.log("hiiii")
        localStorage.setItem("user" , JSON.stringify(result))
        navigate("/tindercard")
      }
      else{
        console.log("error")
      }
    }

  return (
    <>
        
       <div className='Signup'>
            <h1 className='HeadLine'>Login</h1>
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className='inputReg'  placeholder='Enter Email' />
            <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} className='inputReg'  placeholder='Enter Password' />
            <button onClick={loginHandler} className='button'>Login</button>        
       </div>

       <div className='Account'>
          <h5 className='AccName'>Don't have Account ?</h5>
         <Link to='/signup'><button className='RegBut'>Register</button></Link>        
       </div>
    </>
  )
}

export default Login