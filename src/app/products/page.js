'use client'

import Headertwo from '../Headertwo'
import Productlist from './components/productlist'
import MainPage from './components/MainProductPage'

//this is temporary - integrate this into MainPage after this is finished
import ProductCards from './components/productcards'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col
      flex-1 overflow-y-auto overflow-x-hidden
      bg-white">
      <Headertwo />
      <Productlist />
      <MainPage />
      <ProductCards />
    </main>
  )
}
