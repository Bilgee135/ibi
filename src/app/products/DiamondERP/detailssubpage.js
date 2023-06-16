import React from 'react'

function Detailssubpage({ isDetails }) {
    if (isDetails) {
      return (
        <div className='mx-[10%] text-justify'> 
          <p id="b4512997-2078-4e35-b402-e999dee515f0" className='my-8 text-[16px] text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis commodo tortor
            . Sed consectetur bibendum ipsum ut consequat. In auctor sed nisl ac porttitor. Quisque a fermentum nisl
            . Fusce scelerisque arcu nisl, vitae tempor tortor feugiat a. Donec eu rhoncus dui
            . Nunc bibendum augue vulputate erat hendrerit fringilla. Nulla consectetur leo ut velit rutrum volutpat
            . Morbi imperdiet eget tortor non semper
            . Sed ac lorem nibh.
          </p>
          <div className='w-full md:w-4/5 lg:w-3/5'>
            <div className="text-[16px]">
              <h2 className="font-semibold text-[20px]">Lorem Ipsum</h2>
              <ul className="list-disc ml-6">
                <li>
                  <h3 className="font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                  <ul className="list-disc ml-6">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis commodo tortor. Sed consectetur bibendum ipsum ut consequat. In auctor sed nisl ac porttitor. Quisque a fermentum nisl.</li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-semibold">Pellentesque quis commodo tortor.</h3>
                  <ul className="list-disc ml-6">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis commodo tortor. Sed consectetur bibendum ipsum ut consequat. In auctor sed nisl ac porttitor. Quisque a fermentum nisl.</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="text-[16px] my-8">
              <h2 className="font-semibold text-[20px]">Sed consectetur</h2>
              <ul className="list-disc ml-6">
                <li>
                  <h3 className="font-semibold">Sed consectetur bibendum ipsum ut consequat.</h3>
                  <ul className="list-disc ml-6">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis commodo tortor. Sed consectetur bibendum ipsum ut consequat. In auctor sed nisl ac porttitor. Quisque a fermentum nisl.</li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-semibold">In auctor sed nisl ac porttitor.</h3>
                  <ul className="list-disc ml-6">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis commodo tortor. Sed consectetur bibendum ipsum ut consequat. In auctor sed nisl ac porttitor. Quisque a fermentum nisl.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
  
        </div>
      )
    } else {
      return
    }
  }

export default Detailssubpage