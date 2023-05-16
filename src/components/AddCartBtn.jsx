import '../assets/css/AddCartBtn.css'

import React from 'react'

const AddCartBtn = ({name, newPrice}) => {

  
  return (
    <button onClick={()  => {alert(`Haz comprado ${name} en $${newPrice}`)}}>
        Comprar
    </button>
  )
}

export default AddCartBtn
