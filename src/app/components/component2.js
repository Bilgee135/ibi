import React from 'react'

function Component2() {

  return (
    <div className='w-screen h-96 bg-blue-100 flex items-center justify-center'>
      <div className='mr-[10%] ml-[10%] mb-[50px]'>
        <div className="w-full h-auto flex flex-col md:flex-row mt-[75px]">
          <div className="w-1/2 h-auto flex items-center justify-center ml-[50px]">
            <img src='/productIcons/diamond5.png' alt='pic' className='h-auto w-auto'></img>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col items-left justify-center h-full">
              <h2 className="text-6xl font-bold mb-4 text-black">Шинэлэг шийдэл</h2>
              <p className="mt-[15px] text-lg text-gray-500 mb-6">
                Мөнгөн хөрөнгө, бараа материал, хангамжийн материал, үндсэн хөрөнгө, авлага өглөг, төсөв, төсөл, зардал болон байгууллагын санхүүтэй холбоотой бүх бүртгэлээ хөтлөх, тайлан мэдээллүүдээ цаг алдалгүй, үнэн зөвөөр авахад зориулагдсан систем юм. Уг систем нь Даймонд ERP цогц системийн бусад бүх системтэйгээ холбогдон ажилладгаараа онцлогтой юм. 
              </p>
              <ul className='hover:cursor-pointer mb-[10px] w-[22%] h-[52px] bg-blue-500 drop-shadow-xl rounded-xl text-white text-center transition duration-300 hover:bg-white hover:text-blue-600'>
                <a href="/products/Diamond5" className='w-full h-full flex items-center justify-center text-xl'>
                    Дэлгэрэнгүй
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component2;

  