import React from 'react'
import './SwipeButtons.css'
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';




function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton  className='swipeButton_repeat'>
            <ReplayCircleFilledIcon fontSize='large'/>
        </IconButton>
        <IconButton  className='swipeButton_left'>
            <CloseIcon fontSize='large'/>
        </IconButton>
        <IconButton  className='swipeButton_star'>
            <StarIcon fontSize='large'/>
        </IconButton>
        <IconButton  className='swipeButton_right'>
            <FavoriteIcon fontSize='large'/>
        </IconButton>
        <IconButton  className='swipeButton_lightning'>
            <FlashOnIcon fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons