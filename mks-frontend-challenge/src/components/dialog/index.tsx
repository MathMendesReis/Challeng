'use client'
import React from 'react'
import { ButtonClosedModal, ContainerH1WithButton, ContainerProduct, Footer, H1, ModalStyled, ListProductsCart, TotalStyled, TotalPriceStyled, ContainerTotalPrice, ButtonFinish, ButtonRmvItemCart, ContainerInputQuantity, FormQuantity } from './styled'
import ModalState from '@/context/modal/store'
import Closed from '@/icons/closed'
import useCartState from '@/context/cart/store'
import Image from 'next/image'

export default function Modal() {
  const { show, toggleShow } = ModalState()
  const { cartTotal, cartItems,removeCartItem,addToCart } = useCartState()
  return (
    <ModalStyled open={show}>
      <ContainerH1WithButton>
        <H1>carrinho de compras</H1>
        <ButtonClosedModal onClick={toggleShow} >
          <Closed />
        </ButtonClosedModal>
      </ContainerH1WithButton>
      <ListProductsCart>
        {cartItems.map((item) => (
          <ContainerProduct key={item.id}>
            <Image src={item.photo} alt='' quality={100} width={46} height={57} />
            <p>{item.name}</p>
            <ContainerInputQuantity>
            <p>Qtd</p>
            <FormQuantity>
              <button
              // onClick={()=>addToCart(item)} 
              >+</button>
              <p>{item.quantity}</p>
              <button
              // onClick={()=>removeCartItem(item.id)} 
              >-</button>
            </FormQuantity>
            </ContainerInputQuantity>
            <p>{item.price}</p>
            <ButtonRmvItemCart onClick={()=>removeCartItem(item.id)} >
              <Closed />
            </ButtonRmvItemCart>
          </ContainerProduct>
        ))}
      </ListProductsCart>
      <Footer>
        <ContainerTotalPrice>
          <TotalStyled>Total</TotalStyled>
          <TotalPriceStyled>{cartTotal}</TotalPriceStyled>
        </ContainerTotalPrice>
        <ButtonFinish>
          <p>Finalizar compra</p>
        </ButtonFinish>
      </Footer>
    </ModalStyled>
  )
}
