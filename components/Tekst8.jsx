import Image from 'next/image'
import React from 'react'

const Tekst = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl text-white text-center font-bold mt-4  mb-10 hover:text-blue-400  ">
        Studio pielęgnacji zwierząt
      </h1>
      <div className="max-w-[1240px] mx-auto px-4 text-center">
      <div className='flex justify-center'>
        <Image src="negro.webp" className='photostyle2' alt="Pet Grooming" />
      </div>
      </div>
       <div>
        <h1 className="text-4xl text-white text-center font-bold mt-10 hover:text-blue-400"> Nasza Galeria</h1>
        </div>



      <div className="max-w-[1240px] px-4">
        <div className="">
          <div className='flex justify-center'>
            {/* img */}
          </div>
        
          
          





         
          
        </div>
        
      </div>
      
      <div className='max-w-[1240px] mx-auto py-4 px-4 text-center'>
        
      </div>
      
    </div>
  )
}

export default  Tekst