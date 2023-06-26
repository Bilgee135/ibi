'use client'

import Headertwo from './Headertwo'
import MainPage from './products/components/MainProductPage'
import Footer from './footer'
import SideNav from './sidenav'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white">
      <section id='SideNavigation' className='z-50'>
        <SideNav />
      </section>
      <div id='topContainer' className="bg-[url('/tempbackground3.jpg')] bg-cover bg-center bg-fixed min-h-screen max-h-screen">
        <section id='header'>
          <Headertwo />
        </section>
        <section id='heroSection' className='z-40 '>
          <div className="w-screen max-h-screen min-h-screen backdrop-brightness-50">
            <div className="container mx-auto flex px-5 h-screen items-left justify-center flex-col relative">
              <div className="text-center md:text-start text-white lg:w-8/12 w-full relative">
                <h1 className="my-4 text-[45px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight uppercase">

                  {/* <span className='text-[#072ac8] drop-shadow-2xl'>I</span>nteractive<br/>
                  <span className='text-[#1e96fc] drop-shadow-2xl'>B</span>usiness<br/>
                  <span className='text-[#072ac8] drop-shadow-2xl'>I</span>ntelligence */}

                  <span className='text-white drop-shadow-2xl'>I</span>nteractive<br/>
                  <span className='text-white drop-shadow-2xl'>B</span>usiness<br/>
                  <span className='text-white drop-shadow-2xl'>I</span>ntelligence

                  {/* <span className='text-white'>И</span>нтерактив<br/>
                  <span className='text-white'>БИ</span>{' '}АЙ{' '}
                  <span className='text-white'>ХХК</span> */}

                </h1>
                <h2 className="text-white text-xl md:text-2xl mb-8 font-medium tracking-wide normal-case">
                  Санхүү, нягтлан бодох бүртгэл болон бусад бүх төрлийн програм хангамж
                </h2>
                {/* <p className="text-lr md:text-xl mb-8">
                  Бид бизнесийн бүхий л салбарт програм хангамжийн автоматжуулалтын цогц шийдлийг санал болгож байна.
                </p> */}
              </div>
              <div className="w-full flex justify-center items-center absolute bottom-[10px] left-0">
                  <button className=" text-white transition durantion-200 hover:text-gray-500 hover:-translate-y-[3px] font-bold rounded-2xl py-4 px-8 ">
                    <a href="./company" className='text-[13px] sm:text-[15px] lg:text-[18px]'>[Танилцуулга]</a>
                  </button>
                  <button className="ml-2 text-white transition durantion-200 hover:text-gray-500 hover:-translate-y-[3px] font-bold rounded-2xl py-4 px-8 ">
                    <a href="./products" className='text-[13px] sm:text-[15px] lg:text-[18px]'>[Бүтээгдэхүүн]</a>
                  </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    
      <div className='ml-[10%] mr-[10%] mt-[2%]'>
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
