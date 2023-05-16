import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ProductContainer from './components/ProductContainer';
import './assets/css/style.css';
import Product from './components/Product';

import data from './products.json';

function App() {

  return (
    <ProductContainer >
    
    {
      data.map( product =>
        <Product
          key={product.name}
          name={product.name}
          discount={product.discount}
          oldPrice={product.price}
          newPrice={product.price * product.discount / 100}

        />

       
      )}
    </ProductContainer>
   
  )
}

export default App
