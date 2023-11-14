'use client'
import React from 'react'
import { ButtonAddProdInCart, DivWithNameAndPrice, NameProductStyled, PhotoProd, PriceContainerProductStyled, PriceDescriptionStyled, PriceProductStyled, ProductStyled } from './styled'
import useCartState from '@/context/cart/store'

export interface Product {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  createdAt: string
  updatedAt: string
}

export default function Product(props:Product) {
  const { addToCart } = useCartState()

  return (
    <ProductStyled>
      <PhotoProd src={props.photo} alt='' quality={100} height={138} width={111} />
      <DivWithNameAndPrice>
        <NameProductStyled>{props.name}</NameProductStyled>
        <PriceContainerProductStyled>
          <PriceProductStyled>{props.price}</PriceProductStyled>
        </PriceContainerProductStyled>
      </DivWithNameAndPrice>
      <PriceDescriptionStyled>Redesigned from scratch and completely revised.</PriceDescriptionStyled>
      <ButtonAddProdInCart
        onClick={() => addToCart(props)}
      >
        <p>comprar</p>
      </ButtonAddProdInCart>
    </ProductStyled>
  )
}
