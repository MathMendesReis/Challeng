import React from 'react'
import { AxiosPromise } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { ProductsFecthResponse } from '@/types/product'
import { instance } from '@/lib/axios'
export default function useProducts() {
  const API_URL = `/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC`

  const fecth = (query: string): AxiosPromise<ProductsFecthResponse> => {
    return instance.get(API_URL)
  }

  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: () => fecth(API_URL),
  })

  const products = data?.data
 
  return {
    products
  }
}
