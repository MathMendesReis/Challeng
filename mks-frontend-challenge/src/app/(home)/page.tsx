'use client'
import Product from '@/components/product'
import React from 'react'

export default function Home() {
  return (
    <div>
      {[1,2,3,4,5,6].map(() => (
        <>
          <Product />
        </>
      ))}
    </div>
  )
}
