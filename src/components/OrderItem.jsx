import React, { useContext } from 'react'
import '@styles/OrderItem.scss'
import closeIcon from '@icons/icon_close.png'
import { AppContext } from '../context/AppContext'

export const OrderItem = ({ product }) => {
  const { removeFromCart, getProductCount } = useContext(AppContext)

  return (
    <div className='OrderItem'>
      <div className='OrderItem-image'>
        <figure>
          <img src={product.images[0]} alt={product.title} />
        </figure>
        <span>{getProductCount(product)}</span>
      </div>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img
        src={closeIcon}
        alt='close'
        onClick={() => removeFromCart(product)}
      />
    </div>
  )
}
