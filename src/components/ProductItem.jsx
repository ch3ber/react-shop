import React, { useContext } from 'react'
import '@styles/ProductItem.scss'
import { AppContext } from '../context/AppContext'
import button from '@icons/bt_add_to_cart.svg'

export const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext)

  const handleClick = (item) => {
    addToCart(item)
  }

  return (
    <div className='ProductItem'>
      <img src={product.images[0]} alt={product.title} />
      <div className='product-info'>
        <div>
          <p>{product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={button} alt='shopping cart' />
        </figure>
      </div>
    </div>
  )
}
