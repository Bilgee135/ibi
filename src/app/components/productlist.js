import React from 'react'
import { useState } from 'react';
import productjson from './json/productjson.json'


////--------------------------product listing structure---------------------------////

const productstruct = {
  name: '',
  imgsrc: '',
  href: ''
};



////-----------------------------------display--------------------------------////
function Productlist() { 

  const [productnumber, SetProductnumber] = useState(0)

  let products = []

  //----------beginigng of box product ;)-----//
  let product = {
    name: '0',
    imgsrc: '',
    href: ''
  };

  productjson.map(function(curlylist) {
    product = {
      name: curlylist['name'],
      imgsrc: curlylist['srcimg'],
      href: curlylist['href']
    }
    products.push(product)
  })
  


  //game?
  let displayproducts = pick5(products, productnumber)

  function handlePIncrement() {
    SetProductnumber(productnumber + 1)
  }
  function handleNIncrement() {
    SetProductnumber(productnumber - 1)
  }

  return (
    <div className='h-[120px] w-screen bg-[#C5E9FF] flex items-center justify-center'>
      <div className=' bg-white h-[100px] w-screen inline-block align-middle relative'>
        <Productbox productlist={displayproducts} onRButtonClick={handlePIncrement } onLButtonClick={ handleNIncrement }/>
      </div>
    </div>
  )
}

function pick5(array, productnumber) {
  let displayproducts = []

  if (productnumber < 0) {
    productnumber = productnumber * (-1)
  }

  for (let i = productnumber ; i < productnumber + 5; i++){
    displayproducts.push(array[i % 7])
  }

  return displayproducts
}

function Productbox({ productlist, onRButtonClick, onLButtonClick}) {
  return (
    <ul className='static h-[100px] w-screen flex justify-center flex-row'>
      <li key='chevronLeftButton'>
        <button className='h-[100px] w-auto sticky top-0' onClick={ onLButtonClick }>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </li>
      {productlist.map(function(product, i) {
        return (
        <li key={ i }>
          <a href='#' className='relative h-[100px] w-[100px] bg-transparent flex justify-center hover:text-blue-700'>
            <img className='absolute top-5 justify-center w-[46.4px] h-[40px]' src={ product.imgsrc } alt={ product.name }/>
            <p className='absolute bottom-4 text-xs'>{ product.name }</p>
          </a>
        </li>
        )
      })}
      <li key='chevronRightButton'>
        <button className='h-[100px] w-auto sticky top-0' onClick={ onRButtonClick }>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </li>
    </ul>
  )
}

export default Productlist