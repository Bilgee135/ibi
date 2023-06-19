'use client'

import Headertwo from './Headertwo'
import Productlist from './products/components/productlist'
import MainPage from './products/components/MainProductPage'
import Footer from './footer'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      <section id='header'>
        <Headertwo />
      </section>
      <section id='heroSection'>
        <div className="w-screen h-[80%] text-white bg-gradient-to-r from-blue-500 via-sky-800 to-blue-700">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center" alt="IBI" src='./assets/ibi.png' />
          <div className="text-center lg:w-5/12 w-full">
              <h1 className="my-4 text-5xl font-extrabold leading-tight">
              Interactive Business Intelligence
              </h1>
                <p className="text-2xl mb-8">
                  САНХҮҮ, НЯГТЛАН БОДОХ БҮРТГЭЛ БОЛОН БУСАД БҮХ ТӨРЛИЙН ПРОГРАМ ХАНГАМЖ
                </p>  
                <p className="text-xl mb-8 te">
                  Бид бизнесийн бүхий л салбарт програм хангамжийн автоматжуулалтын цогц шийдлийг санал болгож байна.
                </p>
                <div className="flex justify-center mx-auto">
                  <button
                    className="hover:underline bg-white text-gray-800 font-bold rounded-full py-4 px-8">
                    Бидний тухай
                  </button>
                  <button
                    className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
                    Бүтээгдэхүүн
                  </button>
                </div>
            </div>
          </div>
        </div >
      </section>
      <div className='ml-[10%] mr-[10%] mt-[5%]'>
          <h1 className='text-7xl text-black font-opensans font-bold'>
            This is a section 
          </h1>
          <p className='mt-[10px] text-2xl text-justify font-normal text-black'>
            Aute mollit nulla aute amet anim labore voluptate pariatur Lorem 
            consequat pariatur mollit dolore elit. Nisi reprehenderit pariatur 
            eiusmod ullamco esse dolor commodo voluptate do laboris amet. Laborum 
            ut nisi cupidatat cillum ad sit velit velit. Pariatur dolor esse eiusmod 
            esse dolore adipisicing tempor aute adipisicing. Do culpa ut pariatur sint.
          </p>
          <h1 className='mt-[10%] flex justify-end text-7xl text-blue-500 font-opensans font-bold'>
            Мэдээ, мэдээлэл
          </h1>
          <p className='mt-[10px] text-2xl text-justify font-normal text-black'>
            Aute mollit nulla aute amet anim labore voluptate pariatur Lorem 
            consequat pariatur mollit dolore elit. Nisi reprehenderit pariatur 
            eiusmod ullamco esse dolor commodo voluptate do laboris amet. Laborum 
            ut nisi cupidatat cillum ad sit velit velit. Pariatur dolor esse eiusmod 
            esse dolore adipisicing tempor aute adipisicing. Do culpa ut pariatur sint.
          </p>
      </div>
      <section id='footerSection' className='mt-[12%]'>
        <Footer />
      </section>
    </main>
  )
}
