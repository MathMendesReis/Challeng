'use client'
import React from 'react'
import { ButtonClosedModal, ContainerH1WithButton, ContainerProduct, Footer, H1, ModalStyled, ListProductsCart, TotalStyled, TotalPriceStyled, ContainerTotalPrice, ButtonFinish, ButtonRmvItemCart, ContainerInputQuantity, FormQuantity, ParagraphName, ParagraphQtd, ParagraphPrice, ButtonPlus, ButtonMinus } from './styled'
import ModalState from '@/context/modal/store'
import Closed from '@/icons/closed'
import useCartState from '@/context/cart/store'
import Image from 'next/image'

export default function Modal() {
  const { show, toggleShow } = ModalState()
  const { cartTotal, cartItems, removeCartItem, addToCart } = useCartState()
  const totlaFormatted = cartTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return (
    <ModalStyled open={show}>
      <ContainerH1WithButton>
        <H1>carrinho de compras</H1>
        <ButtonClosedModal onClick={toggleShow} >
          <Closed />
        </ButtonClosedModal>
      </ContainerH1WithButton>
      <ListProductsCart>
        {cartItems.map((item) => {
          const priceNumber = parseFloat(item.price);
          const priceFormatted = priceNumber.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
          return (
            <ContainerProduct key={item.id}>
              <Image src={item.photo} alt='' quality={100} width={46} height={57} />
              <ParagraphName>{item.name}</ParagraphName>
              <ContainerInputQuantity>
                <ParagraphQtd>Qtd</ParagraphQtd>
                <FormQuantity>
                  <ButtonPlus onClick={() => addToCart(item)}>+</ButtonPlus>
                  <p>{item.quantity}</p>
                  <ButtonMinus onClick={() => removeCartItem(item.id)}>-</ButtonMinus>
                </FormQuantity>
              </ContainerInputQuantity>
              <ParagraphPrice>{priceFormatted}</ParagraphPrice>
              <ButtonRmvItemCart onClick={() => removeCartItem(item.id)}>
                <Closed />
              </ButtonRmvItemCart>
            </ContainerProduct>
          );
        })}
      </ListProductsCart>
      <Footer>
        <ContainerTotalPrice>
          <TotalStyled>Total</TotalStyled>
          <TotalPriceStyled>{totlaFormatted}</TotalPriceStyled>
        </ContainerTotalPrice>
        <ButtonFinish>
          <p>Finalizar compra</p>
        </ButtonFinish>
      </Footer>
    </ModalStyled>
  )
}
