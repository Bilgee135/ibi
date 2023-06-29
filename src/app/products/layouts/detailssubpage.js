import React from 'react'

function Detailssubpage({ isDetails , children}) {
    if (isDetails) {
      return (
        <div className='mx-[10%]'> 
        { children }
        </div>
      )
    } else {
      return
    }
  }

export default Detailssubpage