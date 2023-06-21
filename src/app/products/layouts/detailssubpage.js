import React from 'react'

function Detailssubpage({ isDetails , children}) {
    if (isDetails["isDetails"]) {
      return (
        <div className='mx-[10%] text-justify'> 
        { children }
        </div>
      )
    } else {
      return
    }
  }

export default Detailssubpage