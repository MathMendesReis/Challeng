"use client"
import React from 'react'
import { ContainerProductsStyled, LoadingPageStyled } from './styled'
import ProductSkeleton from '@/components/skeleton/product-skeleton'

export default function Loagind() {
  return (
    <LoadingPageStyled>
      <ContainerProductsStyled>{Array(8).fill(<ProductSkeleton  />)}</ContainerProductsStyled>
    </LoadingPageStyled>
  )
}
