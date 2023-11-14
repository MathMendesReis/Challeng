'use client'
import Product from '@/components/product'
import React from 'react'
import { ContainerProductsStyled, HomePageStyled } from './styled'
import useProducts from '@/hooks/useProducts'
import useCartState from '@/context/cart/store'

export default function Home() {
  const { products } = useProducts()
  const { cartTotal,cartItems } = useCartState()
  console.log(cartItems)

  

  console.log(cartItems)
  return (
    <HomePageStyled>
      <ContainerProductsStyled>
        {products?.products.map(({ id, name, brand, description, photo, price, createdAt, updatedAt }) => (
          <>
            <Product
              id={id}
              name={name}
              brand={brand}
              description={description}
              photo={photo}
              price={price}
              createdAt={createdAt}
              updatedAt={updatedAt}
            />
          </>
        ))}
      </ContainerProductsStyled>
    </HomePageStyled>
  )
}
