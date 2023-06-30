import React from 'react'

function Component2() {

  return (
    <div className="w-full h-full flex flex-row mt-[75px]">
      <div className="w-1/2 h-auto flex items-center justify-center">
        <img src='/componentpic.png.png' alt='pic' className='h-64 w-64'></img>
      </div>
      <div className="w-1/2 ml-[10%]">
        <div className="flex flex-col items-left justify-center h-full">
          <h2 className="text-6xl font-bold mb-4">ERP</h2>
          <p className="mt-[15px] text-lg text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut felis sit amet erat tempus faucibus sed ac lectus. Phasellus metus dolor, facilisis facilisis purus ac, sodales mattis tellus. 
          </p>
          <ul className='hover:cursor-pointer mb-[10px] w-[22%] h-[52px] bg-blue-500 drop-shadow-xl rounded-xl text-white text-center transition duration-300 hover:bg-white hover:text-blue-600'>
            <li href="#" className='w-full h-full flex items-center justify-center text-xl'>
                Дэлгэрэнгүй
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Component2;

  