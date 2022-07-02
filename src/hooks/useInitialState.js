import { useState } from 'react'

// agregar producto
// si ya esta agregado se coloca la cantidad de productos
// si no esta garegado se inicia la cantidad de productos en 1

const initialState = {
  cart: [],
  countProducts: {}
}

export const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addToCart = (payload) => {
    console.log(payload)
    const isProductInCart = state.cart.some(
      (item) => item.title === payload.title
    )
    if (isProductInCart) {
      console.log(state.countProducts[payload.title])
      const countProduct = state.countProducts[payload.title]
      setState({
        ...state,
        countProducts: {
          ...state.countProducts,
          [payload.title]: countProduct + 1
        }
      })
    } else {
      setState({
        ...state,
        countProducts: {
          ...state.countProducts,
          [payload.title]: 1
        },
        cart: [...state.cart, payload]
      })
    }
    console.log(state.countProducts)
  }

  const getProductCount = (product) => {
    return state.countProducts[product.title]
  }

  const removeFromCart = (payload) => {
    const countProduct = state.countProducts[payload.title]
    if (countProduct === 1) {
      setState({
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id)
      })
    } else {
      setState({
        ...state,
        countProducts: {
          ...state.countProducts,
          [payload.title]: countProduct - 1
        }
      })
    }
  }

  return {
    state,
    addToCart,
    removeFromCart,
    getProductCount
  }
}
