'use client'

import Headertwo from '../Headertwo'
import MainPage from './components/MainProductPage'
import Footer from '../footer'
import Productlist2 from './components/productlist2'
import SideNav from '../sidenav'

//this is temporary - integrate this into MainPage after this is finished
import ProductCards from './components/productcards'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden pt-20 w-full">
      <section id='SideNavigation'>
        <SideNav />
      </section>
      <section id='header' className='fixed top-0 w-full z-50'>
        <div className="bg-gradient-to-r from-[#013a63] from-[10%] via-[#014f86] to-[#61a5c2] to-[80%] h-20 w-full">
          <Headertwo />
        </div>
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
      <section id='footerSection' className='mt-[5%]'>
        <Footer />
      </section>
    </main>
  )
}
