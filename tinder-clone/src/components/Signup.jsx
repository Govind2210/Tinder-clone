import axios from 'axios'
import React from 'react'
import { useState ,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function Signup() {

    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    let navigate = useNavigate()
    
    useEffect(()=>{ // if user in the signup page should not seen 
      const auth = localStorage.getItem('user');
      if(auth){
        navigate('/')
      }
    
  } , [])

    const registerHandle =  async (e) =>{
        e.preventDefault()
        console.log(name , email , password)
        let result = axios.post("https://tinder-bygovind.herokuapp.com/register" ,{
            name ,
            email ,
            password
        }).then((result ) => localStorage.setItem("user" , JSON.stringify(result) )).catch((err) => console.log(err))
        // console.log("result ",result.data.name)
        navigate('/')
    }

  return (
    <div>
        
       <div className='Signup'>
            <h1 className='HeadLine'>Signup</h1>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='inputReg'  placeholder='Enter Name' />
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className='inputReg'  placeholder='Enter Email' />
            <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} className='inputReg'  placeholder='Enter Password' />
            <button onClick={registerHandle} className='button'>Sign Up</button>
       </div>
    </div>
  )
}

export default Signup