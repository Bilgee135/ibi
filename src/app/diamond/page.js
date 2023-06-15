'use client'

import { useState } from 'react'
import Headertwo from '../components/Headertwo'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'

export default function Diamond() {
  return (
    <main className="flex min-h-screen flex-col scroll-smooth">
      <Headertwo />
      <div className='h-[1300px] w-full bg-slate-100'>
        <div className='relative w-full h-[620px] bg-[#C5E9FF] flex items-center justify-center'>
          <Viewcontainer1 />
          <Backbutton />
        </div>
        <div id='details0' className='relative h-[100px] w-full'>
          <div className='absolute left-[10%] h-full w-2/6 flex items-center flex-row'>
            <div className='relative w-1/2 h-1/2'>
              <button className='relative w-3/4 h-2/3 flex items-center'>
                <h2 className='absolute left-0 text-[16px] font-semibold'>Бүтээгдэхүүний тухай</h2>
              </button>
              <Linepage />
            </div>
            <div className='relative w-1/2 h-1/2'>
              <button className='relative w-3/4 h-2/3 flex items-center'>
                <h2 className='absolute left-0 text-[16px] font-semibold'>Бүрэлдэхүүн</h2>
              </button>
              <Linepage />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function Linepage() {
  const [isDetails, SetIsDetails] = useState(true)
  return (
    <div className='h-[10%] w-3/4 bg-blue-900'></div>
  )
}

function Viewcontainer1() {
  return (
    <div className='relative w-5/6 lg:w-4/6 aspect-[10/2] h-5/6 md:h-auto'>
      <div className='invisible md:visible'>
        <div className='absolute right-0 w-3/5 h-full'>
          <div className='h-[60%] w-full flex items-center'>
            <h1 className='text-[34px] font-semibold'>ДАЙМОНД ERP</h1>
          </div>
          <div className='h-[40%] w-full'>
            <p className='text-[15px] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis commodo tortor. <a href="#details0" className="text-[11px] text-blue-800 hover:underline">Дэлгэрэнгүй</a></p>
          </div>
        </div>
        <div className='absolute left-[10%] w-1/5 h-full flex items-center justify-center'>
          <img src='https://img.uxwing.com/wp-content/themes/uxwing/download/clothes-accessories/diamond-icon.png' className='w-full aspect-[512/402]'/>
        </div>
      </div>
      
      <div className='relative w-full h-1/2 flex justify-center visible md:invisible'>
        <img src='https://img.uxwing.com/wp-content/themes/uxwing/download/clothes-accessories/diamond-icon.png' className='absolute bottom-0 h-1/2 sm:h-2/3 aspect-[512/402]'/>  
      </div>
      <div className='relative w-full h-1/2 flex justify-center flex-col visible md:invisible'>
        <div className='relative w-full h-1/4 flex justify-center'>
          <h1 className='absolute bottom-0 text-[24px] font-semibold'>ДАЙМОНД ERP</h1>
        </div>
        <div className='relative w-full h-3/4 flex justify-center'>
          <p className='absolute top-[10%] text-[15px] font-medium text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis commodo tortor.</p>
        </div>
      </div>

    </div>
  )
}

function Backbutton() {
  return (
    <button>
      <a href='/'><ChevronLeftIcon className='absolute top-[30px] left-[20px] h-[55px] md:h-[60px] w-auto lg:h-[70px]'/></a>
    </button>
  )
}
