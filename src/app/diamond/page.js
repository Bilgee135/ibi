'use client'

import { useState } from 'react'
import Headertwo from '../components/Headertwo'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'

export default function Diamond() {
  const [isDetails, SetIsDetails] = useState(true)
  const HandleDetailsButtonClick = () => {
    SetIsDetails(true)
  }
  const HandleOtherButtonClick = () => {
    SetIsDetails(false)
  }
  function Detailsbutton() {
    return (
      <button className='relative w-3/4 h-2/3 flex items-center' onClick={ HandleDetailsButtonClick }>
        <h2 className='absolute left-0 text-[13px] sm:text-[16px] font-semibold w-auto flex-col'>
          Бүтээгдэхүүний тухай
          <LineButton detailsbuttonclicked={ isDetails } detailsbutton={ true }/>
        </h2>
      </button>
    )
  }
  function Otherbutton() {
    return (
      <button className='relative w-3/4 h-2/3 flex items-center' onClick={ HandleOtherButtonClick }>
        <h2 className='absolute left-0 text-[13px] sm:text-[16px] font-semibold w-auto flex-col'>
          Бүрэлдэхүүн
          <LineButton detailsbuttonclicked={ isDetails } detailsbutton={ false }/>
        </h2>
      </button>
    )
  }
  return (
    <main className="flex min-h-screen flex-col scroll-smooth">
      <Headertwo />
      <div className='h-auto w-full bg-slate-100'>
        <div className='relative w-full h-[620px] bg-[#C5E9FF] flex items-center justify-center'>
          <Viewcontainer1 />
          <Backbutton />
        </div>
        <div id='details0' className='relative h-[100px] w-full'>
          <div className='absolute left-[10%] h-full w-full sm:w-5/6 md:w-4/6 lg:w-3/6 flex items-center flex-row'>
            <div className='relative w-1/2 h-1/2'>
              <Detailsbutton />
            </div>
            <div className='relative w-1/2 h-1/2'>
              <Otherbutton />
            </div>
          </div>
        </div>
        <Detailssubpage isDetails={ isDetails }/>
        <Othersubpage isDetails={ isDetails }/>
      </div>
    </main>
  )
}

function Detailssubpage({ isDetails }) {
  if (isDetails) {
    return (
      <div className='mx-[10%] text-justify'> 
        <p id="b4512997-2078-4e35-b402-e999dee515f0" className='my-8 text-[16px] text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis commodo tortor
          . Sed consectetur bibendum ipsum ut consequat. In auctor sed nisl ac porttitor. Quisque a fermentum nisl
          . Fusce scelerisque arcu nisl, vitae tempor tortor feugiat a. Donec eu rhoncus dui
          . Nunc bibendum augue vulputate erat hendrerit fringilla. Nulla consectetur leo ut velit rutrum volutpat
          . Morbi imperdiet eget tortor non semper
          . Sed ac lorem nibh.
        </p>
        <div className='w-full md:w-4/5 lg:w-3/5'>
          <div className="text-[16px]">
            <h2 className="font-semibold text-[20px]">Lorem Ipsum</h2>
            <ul className="list-disc ml-6">
              <li>
                <h3 className="font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <ul className="list-disc ml-6">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis commodo tortor. Sed consectetur bibendum ipsum ut consequat. In auctor sed nisl ac porttitor. Quisque a fermentum nisl.</li>
                </ul>
              </li>
              <li>
                <h3 className="font-semibold">Pellentesque quis commodo tortor.</h3>
                <ul className="list-disc ml-6">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis commodo tortor. Sed consectetur bibendum ipsum ut consequat. In auctor sed nisl ac porttitor. Quisque a fermentum nisl.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="text-[16px] my-8">
            <h2 className="font-semibold text-[20px]">Sed consectetur</h2>
            <ul className="list-disc ml-6">
              <li>
                <h3 className="font-semibold">Sed consectetur bibendum ipsum ut consequat.</h3>
                <ul className="list-disc ml-6">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis commodo tortor. Sed consectetur bibendum ipsum ut consequat. In auctor sed nisl ac porttitor. Quisque a fermentum nisl.</li>
                </ul>
              </li>
              <li>
                <h3 className="font-semibold">In auctor sed nisl ac porttitor.</h3>
                <ul className="list-disc ml-6">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis commodo tortor. Sed consectetur bibendum ipsum ut consequat. In auctor sed nisl ac porttitor. Quisque a fermentum nisl.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

      </div>
    )
  } else {
    return
  }
}

function Othersubpage({ isDetails }) {
  if (!isDetails) {
    return (
      <div className='w-full h-24 bg-slate-400 my-8'></div>
    )
  } else {
    return
  }
}


function LineButton({ detailsbuttonclicked, detailsbutton}) {
  if (detailsbuttonclicked) {
    if (detailsbutton) {
      return (<div className='w-full h-1 bg-slate-600'></div>)
    } else {
      return
    }
  } else {
    if (!detailsbutton) {
      return (<div className='w-full h-1 bg-slate-600'></div>)
    } else {
      return
    }
  }
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
          <p className='absolute top-[10%] text-[15px] font-medium text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis commodo tortor. <a href="#details0" className="text-[11px] text-blue-800 hover:underline">Дэлгэрэнгүй</a></p>
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
