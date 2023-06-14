'use client'

import Image from 'next/image'
import * as headers from './components/Header'
import * as productlists from './components/productlist'
import { useState } from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* div container for the top 2 header: product-list header and topbar header*/}
      <div>
        <headers.default />
        <productlists.default />
      </div>
    </main>
  )
}
