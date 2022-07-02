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
    const isProductInCart = state.cart.some(
      (item) => item.title === payload.title
    )

    if (isProductInCart) {
      const countProduct = state.countProducts[payload.title]
      setState({
        ...state,
        countProducts: {
          ...state.countProducts,
          [payload.title]: countProduct + 1
        }
      })
    }

    if (!isProductInCart) {
      setState({
        ...state,
        countProducts: {
          ...state.countProducts,
          [payload.title]: 1
        },
        cart: [...state.cart, payload]
      })
    }
  }

  const removeFromCart = (payload) => {
    const countProduct = state.countProducts[payload.title]
    const isLastProduct = countProduct === 1
    if (isLastProduct) {
      setState({
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
        countProducts: {
          ...state.countProducts,
          [payload.title]: 0
        }
      })
    }

    if (!isLastProduct) {
      setState({
        ...state,
        countProducts: {
          ...state.countProducts,
          [payload.title]: countProduct - 1
        }
      })
    }
  }

  const getCountProduct = (product) => {
    return state.countProducts[product.title]
  }

  const getAllCountProducts = () => {
    const products = Object.values(state.countProducts)
    let count = 0
    products.forEach((productCount) => {
      count += productCount
    })
    return count
  }

  return {
    state,
    addToCart,
    removeFromCart,
    getCountProduct,
    getAllCountProducts
  }
}
