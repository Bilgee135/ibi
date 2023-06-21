'use client'

import Headertwo from './Headertwo'
import MainPage from './products/components/MainProductPage'
import Footer from './footer'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden pt-20">
      <section id='header'>
        <Headertwo />
      </section>
      <section id='heroSection'>
        <div className="w-screen h-full bg-[url('https://images.pexels.com/photos/2697050/pexels-photo-2697050.jpeg')] bg-cover bg-center">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center text-white lg:w-5/12 w-full">
              <h1 className="my-4 text-4xl md:text-5xl font-extrabold leading-tight">
              Interactive Business Intelligence
              </h1>
                <p className="text-xl md:text-2xl mb-8">
                  САНХҮҮ, НЯГТЛАН БОДОХ БҮРТГЭЛ БОЛОН БУСАД БҮХ ТӨРЛИЙН ПРОГРАМ ХАНГАМЖ
                </p>  
                <p className="text-lr md:text-xl mb-8 te">
                  Бид бизнесийн бүхий л салбарт програм хангамжийн автоматжуулалтын цогц шийдлийг санал болгож байна.
                </p>
                <div className="flex justify-center mx-auto">
                  <button
                    className="bg-blue-500 text-white ring-2 ring-blue-500 transition durantion-200 hover:bg-blue-700 hover:ring-blue-700  hover:text-white font-bold rounded-2xl py-4 px-8 drop-shadow-md">
                      <a href='./company'>
                      Бидний тухай
                      </a>
                  </button>
                  <button
                    className="ml-4 bg-blue-500 text-white ring-2 ring-blue-500 transition durantion-200 hover:bg-blue-700 hover:ring-blue-700 hover:text-white font-bold rounded-2xl py-4 px-8 drop-shadow-md">
                      <a href='./products'>
                        Бүтээгдэхүүн
                      </a>
                  </button>
                </div>
            </div>
          </div>
        </div >
      </section>
      <div className='ml-[10%] mr-[10%] mt-[5%]'>
          <h1 className='text-3xl md:text-4xl lr:text-5xl text-blue-500 font-opensans font-bold text-start'>
             Мэдээ, мэдээлэл 
          </h1>
          <p className='mt-[10px] text-lr md:text-xl lr:text-2xl text-left font-normal text-black'>
            Aute mollit nulla aute amet anim labore voluptate pariatur Lorem 
            consequat pariatur mollit dolore elit. Nisi reprehenderit pariatur 
            eiusmod ullamco esse dolor commodo voluptate do laboris amet. Laborum 
            ut nisi cupidatat cillum ad sit velit velit. Pariatur dolor esse eiusmod 
            esse dolore adipisicing tempor aute adipisicing. Do culpa ut pariatur sint.
          </p>
          <h1 className='mt-[10%] text-3xl md:text-4xl lr:text-5xl text-black font-opensans font-bold text-center'>
              МОНГОЛЫН {' '}<span className='text-blue-500'>ТОП-150</span> {' '}
              {' '}АЖ АХУЙ НЭГЖИЙН <span className='text-blue-500'>88 НЬ</span> МАНАЙ КОМПАНИЙН {' '}
              <span className='text-blue-500'>ХАРИЛЦАГЧИД</span>
          </h1>
          <p className='mt-[20px] text-lr md:text-xl lr:text-2xl text-center font-normal text-black italic'>
            Монгол улсын 3000 орчим байгууллага манай бүтээгдэхүүнийг өдөр тутмын үйл ажиллагаандаа хэрэглэж байна.
          </p>
      </div>
      <section id='footerSection' className='mt-[12%]'>
        <Footer />
      </section>
    </main>
  )
}
