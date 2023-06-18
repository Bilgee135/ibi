import React from 'react'
import data from './json/productcard'

export default function Productcards() {
  return (
    <div className='relative h-full w-[80%] left-[10%] flex justify-center items-center flex-col'>
        <div className='w-full h-[100px]'></div>
        <div className='w-full h-[100px] flex items-center justify-center'><h1 id='buteegdehuunHeader' className='text-[36px] font-bold text-blue-500'>БҮТЭЭГДЭХҮҮН</h1></div>
        <div className='h-[90%] w-[80%] flex items-center relative flex-wrap'>
            { data.map(function(curlylist, i) {
                return (
                    <ProductButton key={'card' + curlylist["name"] + i} name={ curlylist["name"] } src={ curlylist["srcimg"] } href={ 'products/' + curlylist["href"] } desc={ curlylist["desc"] }/>
                )
            })}
        </div>
    </div>
  )
}

function ProductButton(props) {
    return (
        <div className='w-full sm:w-1/2 lg:w-1/3 flex items-center justify-center flex-col'>
            <div className='h-[18px] w-full'></div>
            <button className='bg-[#e8f6ff] hover:bg-[#d5efff] aspect-[0.65] w-[90%] flex-col rounded-xl'>
                <a href={ props.href }>
                    <div className='h-1/2 w-full flex justify-center items-center'>
                        <img className='h-[60%] w-[60%]' src={ props.src }></img>
                    </div>
                    <div className='h-1/2 w-full flex justify-center flex-wrap overflow-hidden py-[10px]'>
                        <div className='w-[85%] h-1/3 flex items-center text-[28px] sm:text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>{ props.name }</div>
                        <div className='w-[85%] h-[60%] text-[14px] sm:text-[9px] xl:text-[11px] 2xl:text-[12px] font-normal text-left'>{ props.desc }</div>
                    </div>
                </a>
            </button>
            <div className='h-[18px] w-full'></div>
        </div>
    )
}