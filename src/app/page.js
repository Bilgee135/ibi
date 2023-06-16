'use client'

import Headertwo from './Headertwo'
import Productlist from './products/components/productlist'
import MainPage from './products/components/MainProductPage'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-blue-500">
      <Headertwo />
    </main>
  )
}
