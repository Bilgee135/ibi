

import { useState } from 'react'
import Headertwo from '../../Headertwo'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import Viewcontainer1 from './viewcontainer'
import Othersubpage from './othersubpage'
import Footer from '@/app/footer'
import Detailssubpage from './detailssubpage'

// import { Text } from '../Diamond6/page'

export default function Layout( props ) {
  //----------------------------"Buteegdehuunii tuhai", "Bureldehuun" gsn tovchnd deer darahad state uurclugdune--------------------//
  const [isDetails, SetIsDetails] = useState(true)
  const HandleDetailsButtonClick = () => {
    SetIsDetails(true)
  }
  const HandleOtherButtonClick = () => {
    SetIsDetails(false)
  }

  //-------------------------Give parameter to Text function-------------//
  //------------------------------Tovchnuud-----------------------------//
  function Detailsbutton() {
    return (
      <button className='relative w-3/4 h-2/3 flex items-center' onClick={ HandleDetailsButtonClick }>
        <h2 className='absolute left-0 text-[13px] sm:text-[16px] font-semibold w-auto flex-col'>
          Бүтээгдэхүүний тухай
          <LineButton detailsbuttonclicked={ isDetails } detailsbutton={ true }/>
        </h2>
      </button>
    )
  }
  function Otherbutton() {
    return (
      <button className='relative w-3/4 h-2/3 flex items-center' onClick={ HandleOtherButtonClick }>
        <h2 className='absolute left-0 text-[13px] sm:text-[16px] font-semibold w-auto flex-col'>
          Бүрэлдэхүүн
          <LineButton detailsbuttonclicked={ isDetails } detailsbutton={ false }/>
        </h2>
      </button>
    )
  }

  //-----------------------------Undsen butsaalt-------------------//
  return (
    <main className="flex min-h-screen flex-col scroll-smooth bg-white overflow-x-hidden">
      <Headertwo />
      <div className='h-auto w-full'>
        <div className="relative w-full h-[620px] bg-[#C5E9FF] flex items-center justify-center">
          <div
            className="absolute top-0 h-full w-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${ props.data["herosrc"] })`,
            }}
          ></div>
          <Viewcontainer1 details={ props.data }/>
          <div className=' absolute left-0 top-[70px]'><Backbutton /></div>
        </div>
        <div id='details0' className='relative h-[100px] w-full'>
          <div className='absolute left-[10%] h-full w-full sm:w-5/6 md:w-4/6 lg:w-3/6 flex items-center flex-row'>
            <div className='relative w-1/2 h-1/2'>
              <Detailsbutton />
            </div>
            <div className='relative w-1/2 h-1/2'>
              <Otherbutton />
            </div>
          </div>
        </div>
        <props.Text isDetails={ isDetails }/>
        <Othersubpage isDetails={ isDetails } data={ props.data }/>
      </div>
      <Footer />
    </main>
  )
}

//------------------------------Tovchnii doorh zuraas-------------------------------//
function LineButton({ detailsbuttonclicked, detailsbutton}) {
  if (detailsbuttonclicked) {
    if (detailsbutton) {
      return (<div className='w-full h-1 bg-slate-600'></div>)
    } else {
      return
    }
  } else {
    if (!detailsbutton) {
      return (<div className='w-full h-1 bg-slate-600'></div>)
    } else {
      return
    }
  }
}

//------------------------------Undsen buteegdehuun huudas ruu butsah tovch----------------------//
function Backbutton() {
  return (
    <button>
      <a href='/products#buteegdehuunHeader'><ChevronLeftIcon className='absolute top-[30px] left-[20px] h-[55px] md:h-[60px] w-auto lg:h-[70px]'/></a>
    </button>
  )
}
