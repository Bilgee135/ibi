import React from 'react'

export default function Pricesubpage({ isDetails, data }) {
    if (isDetails != 2) {
        return
    }
    return (
        <div className='h-auto w-[80%] mx-[10%]'>
            <div className='w-full h-[100px]'></div>
        </div>
    )
}