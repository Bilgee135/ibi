import React from "react";
import { useState } from "react";
import { ArrowDownTrayIcon, BellAlertIcon, ChartBarIcon, CloudIcon, RssIcon } from '@heroicons/react/20/solid'


export default function SideNav(){
  const [isHover1, setisHover1] = useState(false)
  const [isHover2, setisHover2] = useState(false)
  const [isHover3, setisHover3] = useState(false)
  const [isHover4, setisHover4] = useState(false)
  const [isHover5, setisHover5] = useState(false)

  const handleMouseEnter1 = () => {
    setisHover1(true)
  }
  const handleMouseLeave1 = () => {
    setisHover1(false)
  }
  const handleMouseEnter2 = () => {
    setisHover2(true)
  }
  const handleMouseLeave2 = () => {
    setisHover2(false)
  }
  const handleMouseEnter3 = () => {
    setisHover3(true)
  }
  const handleMouseLeave3 = () => {
    setisHover3(false)
  }
  const handleMouseEnter4 = () => {
    setisHover4(true)
  }
  const handleMouseLeave4 = () => {
    setisHover4(false)
  }
  const handleMouseEnter5 = () => {
    setisHover5(true)
  }
  const handleMouseLeave5 = () => {
    setisHover5(false)
  }


  return(
    <div className="hidden md:flex md:fixed md:right-0 md:items-center md:justify-center md:h-screen">
      <div className="w-52 h-auto">
        <div className="py-2 pl-2 flex flex-col space-y-1 font-sans">
          {/* <a
            href="/path/to/file.ext" // Replace with the actual file URL
            download="filename.ext" // Replace with the desired filename and extension
            className="w-full h-9 bg-[#00b4d8] flex items-center justify-between text-white rounded-md px-2 cursor-pointer"
          >
            <ArrowDownTrayIcon className="h-6 w-6" />
            <div className="w-full text-center">Navigation item</div>
          </a> */}
          <div className="hover:cursor-pointer" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
            <div className={`w-full h-9 bg-[#00b4d8] flex items-center justify-between transform ${isHover1 ? 'translate-x-0 duration-300' : 'translate-x-40 duration-300'}`}>
              <ArrowDownTrayIcon className="ml-2 h-6 w-6 text-white" />
              <div className="w-full text-center">
                Navigation item
              </div>
            </div>
          </div>
          <div className="hover:cursor-pointer" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
            <div className={`w-full h-9 bg-[#00b4d8] flex items-center justify-between transform ${isHover2 ? 'translate-x-0 duration-300' : 'translate-x-40 duration-300'}`}>
            <BellAlertIcon className="ml-2 h-6 w-6 text-white" />
              <div className="w-full text-center">
                Navigation item
              </div>
            </div>
          </div>
          <div className="hover:cursor-pointer" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
            <div className={`w-full h-9 bg-[#00b4d8] flex items-center justify-between transform ${isHover3 ? 'translate-x-0 duration-300' : 'translate-x-40 duration-300'}`}>
              <ChartBarIcon className="ml-2 h-6 w-6 text-white" />
              <div className="w-full text-center">
                Navigation item
              </div>
            </div>
          </div>
          <div className="hover:cursor-pointer" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
            <div className={`w-full h-9 bg-[#00b4d8] flex items-center justify-between transform ${isHover4 ? 'translate-x-0 duration-300' : 'translate-x-40 duration-300'}`}>
              <CloudIcon className="ml-2 h-6 w-6 text-white" />
              <div className="w-full text-center">
                Navigation item
              </div>
            </div>
          </div>
          <div className="hover:cursor-pointer" onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
            <div className={`w-full h-9 bg-[#00b4d8] flex items-center justify-between transform ${isHover5 ? 'translate-x-0 duration-300' : 'translate-x-40 duration-300'}`}>
              <RssIcon className="ml-2 h-6 w-6 text-white" />
              <div className="w-full text-center">
                Navigation item
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}