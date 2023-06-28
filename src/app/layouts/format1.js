import React from 'react'
import MainFormat from './mainFormat'
import Image from 'next/image'

function Format1( props ) {
  return (
    <MainFormat>
      <section id='heroSection'>
          <div className='w-full h-[550px] text-white bg-gradient-to-r from-blue-500 via-sky-800 to-blue-700 flex justify-center items-center relative'>
          <div
            className="absolute top-0 h-full w-full bg-cover bg-center bg-fixed brightness-[60%] z-0"
            style={{
              backgroundImage: `url(${props.data["heroimg"]})`,
            }}
          ></div>
            <h1 id='Company' className='uppercasef text-7xl font-opensans font-7xl font-bold text-center z-10'>
              { props.data["title"] }
            </h1>
          </div>
        </section>
        <section id='content'>
          <props.Content />
        </section>
    </MainFormat>
  )
}

export default Format1