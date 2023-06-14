'use client'

import Image from 'next/image'
import * as headers from './components/Header'
import Headertwo from './components/Headertwo'
import Productlist from './components/productlist'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Headertwo />
      <productlist.default />
    </main>
  )
}
