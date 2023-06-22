import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { ButtonGroup, Button } from "@material-tailwind/react"
import Gridcolumn from './gridcolumn'

export function Carousel() {
    return (
        <div className='w-full bg-black aspect-auto'> 
            <div id='upperPart' className='bg-slate-100 relative w-full flex overflow-hidden rounded-b-lg'>
                <img className='h-full w-full aspect-auto' alt='Some img' src='https://imagehost9.online-image-editor.com/oie_upload/images/22834292Do60mb/8EUwEuhNd0dB.png'/>
                <button id='carouselLeftButton' className='transition-all duration-400 ease-in-out hover: h-full w-[75px] absolute left-[10px] flex items-center'>
                    <div className='rounded-full w-full aspect-square bg-slate-300 opacity-50 hover:opacity-90 flex items-center justify-center'><ChevronLeftIcon /></div>
                </button>
                <button id='carouselLeftButton' className='transition-all duration-400 ease-in-out hover: h-full w-[75px] absolute right-[10px] flex items-center'>
                    <div className='rounded-full w-full aspect-square bg-slate-300 opacity-50 hover:opacity-90 flex items-center justify-center'><ChevronRightIcon /></div>
                </button>
            </div>
        </div>
    )
}


export default function MainPage(){
    return (
        <div>
            <div className='h-auto flex justify-center'><Carousel /></div>
            <div className='static ml-[10%] mt-[10px] mr-[10%]' >
                <div id='middlePart' className='mt-[50px] flex flex-col items-end'>
                    <h1 className='text-2xl font-sans font-bold md:text-3xl lg:text-4xl'>
                        <span className='text-blue-500'>ДАВУУ</span> {' '}
                        <span className='text-black'>ТАЛУУД</span>
                    </h1>
                    <div className="h-1 sm:h-2 mt-[5px] sm:mt-[10px]                                  
                            bg-gradient-to-l from-blue-500 to-50% to-white w-full">
                    </div>
                    <Gridcolumn />
                </div>
            </div>
        </div>
        
    )
}




