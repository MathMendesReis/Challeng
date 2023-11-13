'use client'
import Product from '@/components/product'
import React from 'react'
import { ContainerProductsStyled, HomePageStyled } from './styled'

export default function Home() {
  return (
    <HomePageStyled>
      <ContainerProductsStyled>
      {[1,2,3,4,5,6,7,8].map(() => (
        <>
          <Product />
        </>
      ))}
    </ContainerProductsStyled>
    </HomePageStyled>
  )
}
