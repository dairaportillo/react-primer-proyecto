import '../assets/css/Discount.css'
import React from 'react'

const Discount = (props) => {
  return (
    <div className='discount'>
    {props.discount}%
    </div>
  )
}

export default Discount
