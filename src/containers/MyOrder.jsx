import React, { useContext } from 'react'
import { OrderItem } from '@components/OrderItem'
import { AppContext } from '../context/AppContext'
import '@styles/MyOrder.scss'
import arrow from '@icons/flechita.svg'

export const MyOrder = () => {
  const { state } = useContext(AppContext)

  const sumTotal = () => {
    let total = 0
    state.cart.forEach((product) => {
      total += product.price * state.countProducts[product.title]
    })

    return total
  }
  sumTotal()

  return (
    <aside className='MyOrder'>
      <div className='title-container'>
        <img src={arrow} alt='arrow' />
        <p className='title'>My order</p>
      </div>
      <div className='my-order-content'>
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className='order'>
          <p>
            <span>Total</span>
          </p>
          <p>{sumTotal()}</p>
        </div>
        <button className='primary-button'>Checkout</button>
      </div>
    </aside>
  )
}
