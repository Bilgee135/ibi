import React from 'react'

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

export default Viewcontainer1