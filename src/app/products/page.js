'use client'

import Headertwo from '../Headertwo'
import MainPage from './components/MainProductPage'
import Footer from '../footer'
import Productlist2 from './components/productlist2'

//this is temporary - integrate this into MainPage after this is finished
import ProductCards from './components/productcards'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden pt-20">
      <section id='header'>
        <Headertwo />
      </section>
      <section id='productList'>
        <Productlist2 />
      </section>
      <section id='mainPage'>
        <MainPage />
      </section>
      <sectiod id='productCards'>
        <ProductCards />
      </sectiod>
      <section id='footerSection' className='mt-[12%]'>
        <Footer />
      </section>
    </main>
  )
}
