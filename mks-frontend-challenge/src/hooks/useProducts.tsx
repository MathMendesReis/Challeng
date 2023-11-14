import React from 'react'
import { AxiosPromise, AxiosResponse } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { ProductsFecthResponse } from '@/types/product'
import { instance } from '@/lib/axios'
export default function useProducts() {
  const API_URL = `/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC`

  const fetch = async (query: string):Promise<AxiosResponse<ProductsFecthResponse, any>> => {
    return await instance.get(API_URL)
  }

  const { data,isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => await fetch(API_URL),
  })

  const products = data?.data
 
  return {
    products,
    isLoading
  }
}
