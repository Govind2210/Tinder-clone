import  { React , useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


export default function UploadPics() {

    const [name , setName] = useState('')
    const [imgUrl , setimgUrl] = useState('')
    let navigate = useNavigate()

    const uploadImage = async (e) =>{
        
        e.preventDefault()
        
        console.log( name , imgUrl)
        let result = await axios.post("https://tinder-bygovind.herokuapp.com/tinder/cards" ,{
            name,
            imgUrl
        }).then((result ) => console.log("result" , result)).catch((err) => console.log(err))
        
        navigate("/tindercard")
    }

  return (
    <div className='Signup'>
        <h1 className='HeadLine'>Upload Pics</h1>
        <input value={name} onChange={(e)=>setName(e.target.value)} type='text' className='inputReg' placeholder='Enter Name'/>
        <input value={imgUrl} onChange={(e)=>setimgUrl(e.target.value)} type='text' className='inputReg' placeholder='Enter Image Url'/>
        <button onClick={uploadImage} className='button'>UPLOAD</button>
    </div>
  )
}
