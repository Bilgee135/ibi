import React from 'react'
import MainFormat from './mainFormat'

function Format1( props ) {
  return (
    <MainFormat>
      <section id='heroSection'>
          <div className='w-screen h-[550px] text-white bg-gradient-to-r from-blue-500 via-sky-800 to-blue-700 flex justify-center items-center'>
            <h1 id='Company' className='uppercasef text-7xl font-opensans font-7xl font-bold'>
              { props.Title }
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