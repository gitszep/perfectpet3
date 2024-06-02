import React from 'react'
import Slider2 from './Slider2'
import Image from 'next/image';

const Tekst = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl text-white text-center font-bold mt-6  mb-10 hover:text-blue-400  ">
        Studio pielęgnacji zwierząt
      </h1>
      <div className="max-w-[1240px] mx-auto px-4 text-center">
      <div className='flex justify-center'>
        <Image src="negro.webp" className='photostyle2' alt="Pet Grooming" />
      </div>
      </div>
       <div>
        <h1 className="text-4xl text-white text-center font-bold mt-10 hover:text-blue-400">Przyjaciele</h1>
        </div>
        



      <div className="max-w-[1240px] px-4">
        
        <div className="">
          <div className='flex justify-center'>
            {/* img */}
          </div>
               
             </div>
             
      </div>
      <h3 className="text-2xl text-left font-bold m-10 mb-2 hover:text-blue-400 text-white">
            Rodowód Pogi
            </h3> 
        <p className='py-4'>
        Oczywiście, oto poprawiony tekst z dodanymi odstępami:

"Poga to nasz cocker spaniel angielski, właściwie Lavender Złota Grota, ale po domowemu Poga. <br/> Jego właścicielami są Wiola i Marcin Klajny.

Poga odnosi sukcesy na wystawach – z siedmiu dotychczasowych występów pięć razy otrzymał doskonałe oceny, <br/> dwukrotnie zdobył CWC, a pozostałe dwie wystawy zakończyły się ocenami bardzo dobrze. Z każdą wystawą widzimy postępy w jego występie.
        </p>
    </div>
  )
}

export default  Tekst