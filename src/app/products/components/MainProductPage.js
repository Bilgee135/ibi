import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ButtonGroup, Button } from "@material-tailwind/react"
import AdvONE from './AdvantagesMenu/Adv1'
import AdvTWO from './AdvantagesMenu/Adv2'
import AdvTHREE from './AdvantagesMenu/Adv3'
import AdvFOUR from './AdvantagesMenu/Adv4'
import AdvFIVE from './AdvantagesMenu/Adv5'


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
        <main className=' static ml-[10%] mt-[100px] mr-[10%]'>
            <div>
                <h1 className='text-4xl font-sans font-bold '>
                    <span className='text-blue-500'>ҮНДСЭН</span> {' '}
                    <span className='text-black'>БҮТЭЭГДЭХҮҮН</span>
                   
                </h1>
                <div className="h-2 mt-[10px]                                   
                        bg-gradient-to-r from-blue-500 to-50% to-whtie w-full"></div>
                <div id='mainDescription' 
                    className='text-base font-semibold font-sans text-black 
                    mt-[10px] mr-[500px] text-justify'>
                    <div>
                    ERP гэдэг нь байгууллагын нөөц төлөвлөлтийн цогц шийдэл юм. Байгууллагын нөөц төлөвлөлтийн системийг 
                    зөвхэрэглэснээр өөрсдийн бизнесээ өргөжүүлж, байгууллагын санхүү, цалин, хүний нөөц, түгээлт, ханган 
                    нийлүүлэлт,агуулах, үйлдвэрлэлээс гадна салбарын онцлогт тохирсон хэрэглэхэд хялбар системээр бизнесийнхээ 
                    үнэн бодитоймэдээллийг цаг тухайд нь хүлээн авч оновчтой шийдвэр гарган, үр ашигтай удирдаж, бүтээмжээ 
                    нэмэгдүүлэн ажиллахболомжтой болно.
                    </div>
                    
                </div>
            </div>
            
            <div className='flex flex-col items-end'>
                <h1 className='text-4xl font-sans font-bold'>
                    <span className='text-blue-500'>ДАВУУ</span> {' '}
                    <span className='text-black'>ТАЛУУД</span>
                </h1>
                <div className="h-2 mt-[10px]                                   
                        bg-gradient-to-l from-blue-500 to-50% to-white w-full">
                </div>
            </div>
            <div className='flex justify-items-stretch mt-[1%] space-x-5 place-items-center'>
              <div className='order-1 active bg-white rounded-xl w-fit hover:bg-blue-500    
              transition duration-500 ease-in-out'><AdvONE /></div>
              <div className='order-2 active bg-white rounded-xl w-fit hover:bg-blue-500
              transition duration-500 ease-in-out'><AdvTWO /></div>
              <div className='order-3 active bg-white rounded-xl w-fit hover:bg-blue-500
              transition duration-500 ease-in-out'><AdvTHREE /></div>
              <div className='order-4 active bg-white rounded-xl w-fit hover:bg-blue-500
              transition duration-500 ease-in-out'><AdvFOUR /></div>
              <div className='order-5 active bg-white rounded-xl w-fit hover:bg-blue-500
              transition duration-500 ease-in-out'><AdvFIVE /></div>
            </div>
           
        </main>
        
    )
}




