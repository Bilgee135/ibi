import Image from 'next/image'
import React from 'react'
import Product from './components/product.js'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Product />
    </main>
  )
}
