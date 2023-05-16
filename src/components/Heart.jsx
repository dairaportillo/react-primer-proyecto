import '../assets/css/Heart.css'
import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from 'react-icons/fa'
import { useState } from 'react';

import React from 'react'

const Heart = () => {

    
    const [liked, setLiked] = useState(false); 

    const handleClick = () =>{
        liked == true ? setLiked(false) : setLiked(true)
    }


  return (
    <div onClick={handleClick}>
    {
        liked == true ? <FaHeart className='heart'/>  : <AiOutlineHeart className='heart'/>
    }
   
    </div>
  )
}

export default Heart
