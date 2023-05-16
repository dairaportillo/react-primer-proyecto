import React from 'react'
import '../assets/css/Product.css'
import AddCartBtn from './AddCartBtn'
import Discount from './Discount'
import Heart from './Heart'


const Product = ({discount, name, oldPrice, newPrice}) => {
  return (
    <div className='product'>
    <Discount discount={discount}></Discount>
   <Heart></Heart>
     <img className='product__img' src='https://picsum.photos/180' alt="product" />
    <h2 className='product__name'>{name}</h2>
   <div className='product__details'>
    <p className='product__oldPrice'>${oldPrice}</p>
    <p className='product__price'>${newPrice}</p>
   </div>
    <AddCartBtn name={name} newPrice={newPrice}/>
    </div>
  )
}

export default Product
