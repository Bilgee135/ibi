'use client'

import Headertwo from './components/Headertwo'
import Productlist from './components/productlist'
import MainPage from './components/MainProductPage'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col
      flex-1 overflow-y-auto overflow-x-hidden
      bg-gradient-to-t from-blue-600 to-30% to-white">
      <Headertwo />
      <Productlist />
      <MainPage />
    </main>
  )
}
