import React from 'react';

export default function Product(props) {
   const {product, onAdd} = props;
   return (
      <div className='product'>
         <h3>{product.productName}</h3>
         <h5>£{product.price}</h5>
         <button onClick={() => onAdd(product)} className='button'>Add To Cart</button>
      </div>
   )
}
