import React from 'react'
import MainFormat from './mainFormat'

function Format1( props ) {
  return (
    <MainFormat>
      <section id='heroSection'>
          <div className='w-screen h-fit text-white bg-gradient-to-r from-blue-500 via-sky-800 to-blue-700'>
              <div className='container mx-auto flex px-5 py-24 items-center justify-between flex-col'>
                  <div className='text-center lg:w-5/12 w-full'>
                      <h1 id='Company' className='uppercasef text-7xl font-opensans font-7xl font-extrabold'>
                          { props.Title }
                      </h1>
                  </div>
              </div>
          </div>
        </section>
        <section id='content'>
          <props.Content />
        </section>
    </MainFormat>
  )
}

export default Format1