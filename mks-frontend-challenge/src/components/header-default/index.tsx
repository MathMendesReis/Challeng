'use client'
import React from 'react'
import { HeaderStyled, ButtonCart, ParagraphStyled, TitleStyled } from './styled'
import Cart from '@/icons/cart'

export default function Header() {
  return (
    <HeaderStyled>
      <TitleStyled>MKS</TitleStyled>
      <ParagraphStyled>Sistemas</ParagraphStyled>
      <ButtonCart>
          <Cart />
          <p>0</p>
      </ButtonCart>
    </HeaderStyled>
  )
}
