import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

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
        <main className='ml-[200px] mt-[100px] mr-[200px]'>
            <div>
                <h1 className='text-5xl font-sans font-bold '>
                    <span className='text-blue-500'>ҮНДСЭН</span> {' '}
                    <span className='text-black'>БҮТЭЭГДЭХҮҮН</span>
                    <div className="h-2 mt-[10px]                                   
                        bg-gradient-to-r from-blue-500 to-45% to-whtie w-full"></div>
                </h1>
                <div id='mainDescription' 
                    className='text-2xl font-normal font-sans text-black 
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
            
            <div className='flex flex-col items-end mt-[200px]'>
                <h1 className='text-5xl font-sans font-bold'>
                    <span className='text-blue-500'>ДАВУУ</span> {' '}
                    <span className='text-black'>ТАЛУУД</span>
                    <div className="h-2 mt-[10px]                                   
                        bg-gradient-to-l from-blue-500 to-100% to-white w-full"></div>
                </h1>
                <div className='mt=[50px]'> <SmallNavBar /> </div>
        
                <div id='mainDescription2' 
                    className='text-2xl font-normal font-sans text-black 
                    mt-[10px] ml-[500px] text-justify'>
                    <div>
                    ERP нь танд нягтлан бодох бүртгэл, худалдан авалт, борлуулалт,бараа материал, 
                    харилцагч нартай холбоотой тооцоо, мөнүйлдвэрлэлийн процесс эсвэл олон газар байрлах 
                    салбаруудынхаа үйлажиллагааг дэмжиж оновчтой арга барилаар удирдахад тань туслахбодит 
                    хяналтыг мэдрүүлэх болно. Салбаруудын үйл ажиллагааны хяналтыг цаг алдалгүй хийж бизнесийг
                    дэмжинэ. Бүхий л үйл ажиллагаандаа бодит хяналт тавина. Шийдвэр гаргах явцыг хурдасгаж, 
                    зах зээлд үзүүлэх нөлөөллийгнэмэгдүүлнэ.Удирдлага хялбар байдлаар нийт хэлтэс, нэгжүүдийн 
                    талаархоновчтой мэдээлэл авна.
                    </div>
                    
                </div>
            </div>
           
        </main>
        
    )
}

function SmallNavBar() {
    return (
        <Disclosure as="nav" className="bg-transparent">
          {({ open }) => (
            <>
              <div className="max-w-7xl sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-items-end">
                  
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="hidden sm:ml-6 sm:block">
                      <div>
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? 'bg-blue-500 text-white break-all' : 'text-black hover:bg-blue-500 hover:text-white',
                              'rounded-3xl px-1 py-5 text-lr font-semibold font-sans text-center '
                            )}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                   
                  </div> */}
                </div>
              </div>
    
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-blue-500 text-white' : 'text-black hover:bg-blue-500 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      )
}

