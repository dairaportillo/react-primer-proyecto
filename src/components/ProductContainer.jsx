import React from 'react'
import '../assets/css/ProductContainer.css'

const ProductContainer = (props) => {
  return (
    <section className='productos__section'>
      <h1 className='products__title'>Nuestros productos:</h1>
      <div className='products__container'>
        {props.children}
      </div>
    </section>
  )
}

export default ProductContainer
