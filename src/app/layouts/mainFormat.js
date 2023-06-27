'use client'

import React from 'react'
import Headertwo from '../Headertwo'
import Footer from '../footer'
import RootLayout from '../layout'

function MainFormat({children}) {
  return (
    <RootLayout>
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
    </RootLayout>
  )
}

export default MainFormat