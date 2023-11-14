'use client'
import React from 'react'
import { HeaderStyled, ButtonCart, ParagraphStyled, TitleStyled } from './styled'
import Cart from '@/icons/cart'
import useCartState from '@/context/cart/store'
import ModalState from '@/context/modal/store'

export default function Header() {
  const { cartItems } = useCartState()
  const { toggleShow} = ModalState()


  return (
    <HeaderStyled>
      <TitleStyled>MKS</TitleStyled>
      <ParagraphStyled>Sistemas</ParagraphStyled>
      <ButtonCart 
      onClick={toggleShow}
      >
          <Cart />
          <p>{cartItems.length}</p>
      </ButtonCart>
    </HeaderStyled>
  )
}
