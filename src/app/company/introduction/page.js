'use client'

import Headertwo from "../../Headertwo"
import Footer from "../../footer"
export default function Company(){
    return (
        <div className='flex min-h-screen flex-col bg-white overflow-x-hidden'>
            <section id='header' className='fixed top-0 w-full'>
                <Headertwo />
            </section>
            <section id='heroSection'>
                <div className='w-screen h-fit text-white bg-gradient-to-r from-blue-500 via-sky-800 to-blue-700'>
                    <div className='container mx-auto flex px-5 py-24 items-center justify-between flex-col'>
                        <div className='text-center lg:w-5/12 w-full'>
                            <h1 id='Company' className='uppercasef text-7xl font-opensans font-7xl font-extrabold'>
                                Бидний Тухай
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
             <div className='ml-[10%] mr-[10%] mt-[5%]'>
                <h1 className='text-7xl text-black font-opensans font-bold'>
                    Бидний Түүх
                </h1>
                <p className='mt-[10px] text-2xl text-justify font-normal text-black'>
                    Aute mollit nulla aute amet anim labore voluptate pariatur Lorem 
                    consequat pariatur mollit dolore elit. Nisi reprehenderit pariatur 
                    eiusmod ullamco esse dolor commodo voluptate do laboris amet. Laborum 
                    ut nisi cupidatat cillum ad sit velit velit. Pariatur dolor esse eiusmod 
                    esse dolore adipisicing tempor aute adipisicing. Do culpa ut pariatur sint.
                </p>
                <h1 className='mt-[10%] flex justify-end text-7xl text-blue-500 font-opensans font-bold'>
                    Ажиллах арга барил
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

        </div>
    )
}
