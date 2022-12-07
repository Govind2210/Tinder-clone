import React from 'react'
import './Header.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DynamicFormOutlinedIcon from '@mui/icons-material/DynamicFormOutlined';
import IconButton from '@mui/material/IconButton';
import {useNavigate} from "react-router-dom"


function Header() {

  const navigate = useNavigate()

  const auth = localStorage.getItem('user')

  const logout = ()=>{
    localStorage.clear();
    navigate('/')
  }

  const loginpage = () =>{
      navigate("/signup")
  }

  const Profil = () =>{
    navigate('/UploadPics')
  }

  return (
    <div className='header'>
         { auth ? <IconButton onClick={Profil} >
          <AccountCircleOutlinedIcon fontSize='large' className='header-Icon'/>
          </IconButton> 
          :
           <IconButton>
          <AccountCircleOutlinedIcon fontSize='large' className='header-Icon'/>
          </IconButton> }
        
        <img className='header_logo' 
        src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png'
        alt='logo'        
        />
        {auth ? <h4 onClick={logout} className='logout'>LOGOUT</h4>: 
        <IconButton onClick={loginpage}>
          <DynamicFormOutlinedIcon fontSize='large' className='header-Icon'/>
        </IconButton>  
        }
        
           
    </div>
  )
}

export default Header