import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ButtonGroup, Button } from "@material-tailwind/react"
import Gridcolumn from './gridcolumn'


const navigation = [
    { name: 'Оновчтой үйл ажиллагаа', href: '#', current: false },
    { name: 'Зардлыг бууруулна', href: '#', current: false },
    { name: 'Бизнесээ хөгжүүл', href: '#', current: false },
    { name: 'Бизнесийн чадамжийг нэмэгдүүлэх', href: '#', current: false },
    { name: 'Ухаалаг тайлан, шинжилгээний шийдэл', href: '#', current: false },
  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MainPage(){

    return (
        <div className='static ml-[10%] mt-[100px] mr-[10%]'>
            <div>
                <div id='upperPart'>
                    <h1 id='undsenButeegdehuun' className='text-2xl font-sans font-bold md:text-3xl lg:text-4xl'>
                        <span className='text-blue-500'>ҮНДСЭН</span> {' '}
                        <span className='text-black'>БҮТЭЭГДЭХҮҮН</span>
                    
                    </h1>
                    <div className="h-1 sm:h-2 mt-[5px] sm:mt-[10px]                                   
                            bg-gradient-to-r from-blue-500 to-50% to-whtie w-full">
                    </div>
                    <div id='mainDescription' 
                        className='static text-xs font-semibold font-sans text-black 
                        mt-[10px] w-full sm:w-[60%] text-justify md:text-sm lg:text-base'>
                        ERP гэдэг нь байгууллагын нөөц төлөвлөлтийн цогц шийдэл юм. Байгууллагын нөөц төлөвлөлтийн системийг 
                        зөвхэрэглэснээр өөрсдийн бизнесээ өргөжүүлж, байгууллагын санхүү, цалин, хүний нөөц, түгээлт, ханган 
                        нийлүүлэлт,агуулах, үйлдвэрлэлээс гадна салбарын онцлогт тохирсон хэрэглэхэд хялбар системээр бизнесийнхээ 
                        үнэн бодитоймэдээллийг цаг тухайд нь хүлээн авч оновчтой шийдвэр гарган, үр ашигтай удирдаж, бүтээмжээ 
                        нэмэгдүүлэн ажиллах боломжтой болно.
                    </div>
                </div>
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




