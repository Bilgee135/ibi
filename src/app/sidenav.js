import React from "react";
import { useState } from "react";
import { ArrowDownTrayIcon, BellAlertIcon, ChartBarIcon, CloudIcon, RssIcon, ChevronDoubleRightIcon } from '@heroicons/react/20/solid'

const SIDE = [
  { name: 'Navigation Item', href: '#', icon: ArrowDownTrayIcon, color: 'bg-[#014F86]' },
  { name: 'TeamViewer татах', href: '#', icon: BellAlertIcon, color: 'bg-[#2A6F97]' },
  { name: 'AnyDesk татах', href: '#', icon: ChartBarIcon, color: 'bg-[#2C7DA0]' },
  { name: 'Navigation Item', href: '#', icon: CloudIcon, color: 'bg-[#468FAF]' },
  { name: 'Navigation Item', href: '#', icon: RssIcon, color: 'bg-[#61A5C2]' },
]


export default function SideNav(){
  const [isHover, setIsHover] = useState(Array(SIDE.length).fill(false));

  const handleMouseEnter = (index) => {
    setIsHover((prevHover) => {
      const hoverCopy = [...prevHover];
      hoverCopy[index] = true;
      return hoverCopy;
    });
  };

  const handleMouseLeave = (index) => {
    setIsHover((prevHover) => {
      const hoverCopy = [...prevHover];
      hoverCopy[index] = false;
      return hoverCopy;
    });
  };


  return(
    <div className="hidden md:flex md:fixed md:right-0 md:items-center md:justify-center md:h-screen">
      <div className="w-52 h-auto">
      <div className="py-2 pl-2 flex flex-col space-y-1 font-sans">
          {SIDE.map((item, index) => (
            <a
              href={item.href}
              className="hover:cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              key={index}
            >
              <div
                className={`w-full h-9 ${item.color} flex items-center justify-between rounded-xl transform ${
                  isHover[index] ? 'translate-x-0 duration-500 drop-shadow-xl' : 'translate-x-40 duration-500 drop-shadow-lg'
                }`}
              >
                <item.icon className="ml-2 h-6 w-6 text-white" />
                <div className="w-full text-center text-white">{item.name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

