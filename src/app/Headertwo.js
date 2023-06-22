"use client"

import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  ShieldCheckIcon,
  ArrowUturnUpIcon,
  BuildingOfficeIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Үндсэн Бүтээгдэхүүн', description: 'Манай бүтээгдэхүүнтэй танилцах', href: './products', icon: ChartPieIcon },
  { name: 'Үйл ажиллагааны чиглэлээр', description: 'Чиглэлүүдээр сонгож харах', href: '#', icon: CursorArrowRaysIcon },

]

const company = [
    { name: 'ТАНИЛЦУУЛГА', description: 'Бидний түүх болон ажиллах арга барил', href: './company', icon: BuildingOfficeIcon},
    { name: 'ЗОХИОН БАЙГУУЛАЛТ', description: 'Байгууулагын дотоод бүтэц', href: '#', icon: UserGroupIcon},
    { name: 'ХОЛБОО БАРИХ', description: 'Холбогдох утасны дугаар, email', href: '#', icon: PhoneIcon},
]
const callsToAction = [
  { name: 'Үндсэн бүтээгдэхүүн', href: '/products', icon: ShieldCheckIcon },
  { name: 'ҮА чиглэлээр', href: '#', icon: ArrowUturnUpIcon },
]

function classNames(...classes) {  
  return classes.filter(Boolean).join(' ')
}

export default function Headertwo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if(window.scrollY >= 90) {
      setColor(true);
    }else{ 
      setColor(false);
     }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
  })

  const handleMouseEnter1 = () => {
    setIsOpen1(true);
  };

  const handleMouseLeave1 = () => {
    setIsOpen1(false);
  };

  const handleMouseEnter2 = () => {
    setIsOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setIsOpen2(false);
  };


  return (
    <header className='fixed top-0 w-full z-50 font-poppins'>
      <div className={color ? 'transition duration-[400ms] bg-white drop-shadow-md' : 'transition duration-[400ms] bg-transparent'}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-[15px] px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">IBI</span>
              <img className="h-[50px] w-auto transition duration-300 ease-in-out hover:scale-110 dark:hover:shadow-black/30" 
              src="https://i.ibb.co/fk2L0Yz/ibi.png" alt="IBI LOGO" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Цэс нээх</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <div
                className="flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900 ring-0 duration-200 hover:text-blue-500"
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                Компани
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </div>

              <Transition
                as={Fragment}
                show={isOpen1}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-1 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                    {company.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover >

            <Popover className="relative">
              <div
                className="flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900 ring-0 duration-200 hover:text-blue-500"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                Бүтээгдэхүүн
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </div>

              <Transition
                as={Fragment}
                show={isOpen2}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-1 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover >
            {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div> */}
                      
            <a href="#" className="text-md font-semibold leading-6 text-gray-900 duration-200 hover:text-blue-600">
              Үйлчилгээ
            </a>
            <a href="#" className="text-md font-semibold leading-6 text-gray-900 duration-200 hover:text-blue-600">
              Тоног төхөөрөмж
            </a>
            <a href="#" className="text-md font-semibold leading-6 text-gray-900 duration-200 hover:text-blue-600">
              Хүний нөөц
            </a>
            <a href="#" className="text-md font-semibold leading-6 text-gray-900 duration-200 hover:text-blue-600">
              Хамтрагчид
            </a>

            {/* <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                  </div>
              </div> */}
          </Popover.Group>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between bg-opacity-100">
              <a href="page" className="-m-1.5 p-1.5">
                <span className="sr-only">IBI</span>
                <img
                  className="h-8 w-auto"
                  src="https://i.ibb.co/fk2L0Yz/ibi.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 "
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Цэс хаах</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <> 
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Компани
                            <ChevronDownIcon
                              className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...company ].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <> 
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                            Бүтээгдэхүүн
                            <ChevronDownIcon
                              className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...products ].map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Үйлчилгээ
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Тоног төхөөрөмж
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Хүний нөөц
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Хамтрагчид
                  </a>

                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </header>
    // </div>
  )
}
