import React from 'react'

function Detailssubpage({ isDetails }) {
    if (isDetails) {
      return (
        <div className='mx-[10%] text-justify'> 
        {/* ---------------------------------------------Text-ee end biceerei!---------------------------------------------------------
        ---------------------------------Tolgoi uguulbur, ene n hamgiin deer baigaa hsg n ---------------------------*/}
          <p id="b4512997-2078-4e35-b402-e999dee515f0" className='my-8 text-[16px] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper non nisl a vulputate. Nam leo justo, maximus sed ultricies quis, suscipit ac erat. Ut et nibh lobortis nisi sodales blandit et sed nulla. Proin egestas mollis placerat. Duis suscipit ac risus imperdiet gravida. Nunc tincidunt augue ac lectus tempor cursus non non ante. Pellentesque cursus nisi a odio luctus, non commodo quam auctor. Donec nisi diam, porta et dignissim egestas, tempor sed ligula.</p>
          <div className='w-full md:w-4/5 lg:w-3/5'>
            {/* ----------End harin, uur nemelt ym bicij bolno (ene door baigaa n bullet point uudaar hiisn zuils baiga)------------- */}
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
            {/* ---------------------------------------End text-ee biceed duusgaj bolno--------------------------------*/}
          </div>
  
        </div>
      )
    } else {
      return
    }
  }

export default Detailssubpage