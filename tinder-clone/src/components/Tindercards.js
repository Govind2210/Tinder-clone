import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import SwipeButtons from './SwipeButtons';
import './TinderCards.css';
import axios from './Axios'; // local axious (that we made a folder)

function  Tindercards() {

    const [people , setPeople] = useState([]);

    // we are using this as a comonent did mounte
    //1. first make dunction -> cont req ->
    useEffect(()=>{
        async function fetchData (){
            const req = await axios.get('https://tinder-bygovind.herokuapp.com/tinder/cards')
            
            setPeople(req.data); 
            // whenever req.data come in backend

        
        }
        fetchData();
    } , [])
    //we are using square brackets whenever we load it load once not infinte 

    console.log("people" , people)

    const swiped = (direction , nameToDelete) =>{
        console.log("removing:" + nameToDelete)       
    }

    const outofFrame = (name) =>{
        console.log(name + " left the screen")
    }


  return (
    <>
    <div className='tinderCards'>
        <div className='tinderContainer' id='cardContain'>
        {
            people.map((person)=>{
                console.log(person);
                return(
                <TinderCard className='swipe'
                    key={person.name}
                    preventSwipe={["up" ,"down"]}
                    onSwipe={(dir)=> swiped(dir , person.name)}
                    onCardLeftScreen={()=> outofFrame(person.name)}>
              
                    <div style={{backgroundImage: `url(${person.imgUrl})`}}
                    className='card'
                    >
                        <h3>{person.name}</h3>  

                    </div>
                 
                </TinderCard>
                 )
            
            })
        }
        </div>
    </div>
    <SwipeButtons/>
    </>
  )
}

export default Tindercards