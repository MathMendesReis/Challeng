'use client'
import React from 'react'
import { ButtonAddProdInCart,  DivWithNameAndPrice, NameProductStyled, PhotoProd, PriceContainerProductStyled, PriceDescriptionStyled, PriceProductStyled, ProductStyled } from './styled'


export default function Product() {
  return (
    <ProductStyled>
      <PhotoProd src={'/apple-watch.png'} alt='' quality={100} height={138} width={111}/>
      <DivWithNameAndPrice>
        <NameProductStyled>Apple Watch Series 4 GPS</NameProductStyled>
          <PriceContainerProductStyled>
          <PriceProductStyled>R$399</PriceProductStyled>
          </PriceContainerProductStyled>
      </DivWithNameAndPrice>
      <PriceDescriptionStyled>Redesigned from scratch and completely revised.</PriceDescriptionStyled>
      <ButtonAddProdInCart>
        <p>comprar</p>
      </ButtonAddProdInCart>
    </ProductStyled>
  )
}
