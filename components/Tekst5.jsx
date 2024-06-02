import React from 'react'
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
        <h1 className="text-4xl text-white text-center font-bold mt-10 hover:text-blue-400">Orientacyjny cennik usług studia</h1>
        </div>



      <div className="max-w-[1240px] px-4">
        <div className="">
          <div className='flex justify-center'>
            {/* img */}
          </div>
          <p className='py-4 mt-6'>
              Podane ceny są cenami orientacyjnymi.
              Ostateczny koszt usługi jest zawsze wyceniany <br /> po obejrzeniu psa
              i jest zależny od stanu okrywy włosowej, zachowania psa,
              użytych kosmetyków,<br/> typu usługi oraz życzenia klienta.
              Usługi niestandardowe są wyceniane dodatkowo.
            <br/>  Używam najlepszych kosmetyków i preparatów pielęgnacyjnych dla zwierząt.
              <br/> Dzięki temu mogę zagwarantować dobry efekt pielęgnacyjny.
             <br/> Aby zapewnić Państwu Najwyższy poziom usług, nie wykonuję strzyżenia bez kąpieli w studio.
            </p>
          
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto py-4 px-4 text-center'>
      </div>
    </div>
  )
}

export default  Tekst