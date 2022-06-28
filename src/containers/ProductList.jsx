import React, { useState, useEffect } from 'react'
import { ProductItem } from '@components/ProductItem'
import '../styles/ProductList.scss'
import axios from 'axios'

export const API = 'https://api.escuelajs.co/api/v1/products'

export const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await axios.get(API)
    setProducts(response.data)
  }

  return (
    <section className='main-container'>
      <div className='ProductList'>
        {products.map((product) => (
          <ProductItem />
        ))}
      </div>
    </section>
  )
}
