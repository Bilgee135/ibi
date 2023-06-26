'use client'

import React from 'react'
import Headertwo from '../Headertwo'
import Footer from '../footer'
function MainFormat({children}) {
  return (
    <main>
        <section id='Header'>
            <Headertwo />
        </section>
        <section id='Body' className='mr-[0%] ml-[0%]'>
            {children}
        </section>
        <section id='Footer'>
            <Footer />
        </section>
    </main>
  )
}

export default MainFormat