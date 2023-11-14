'use client';
import React, { Suspense, lazy } from 'react';
import useProducts from '@/hooks/useProducts';
import { ContainerProductsStyled, HomePageStyled } from './styled';
import ProductSkeleton from '@/components/skeleton/product-skeleton';

const Product = lazy(() => import('@/components/product'));

export default function Home() {
  const { products, isLoading } = useProducts();

  return (
    <HomePageStyled>
        <ContainerProductsStyled>
          {products?.products.map(({ id, name, brand, description, photo, price, createdAt, updatedAt }) => (
             <Product
               key={id}
               id={id}
               name={name}
               brand={brand}
               description={description}
               photo={photo}
               price={price}
               createdAt={createdAt}
               updatedAt={updatedAt}
             />
          ))}
        </ContainerProductsStyled>
    </HomePageStyled>
  );
}
