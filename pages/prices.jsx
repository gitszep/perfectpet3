import React from 'react';
import Tekst5 from '../components/Tekst5';
import Footer from '../components/Footer';
import Support from '../components/Support';

const about = () => {
  return (
    <div className="flex mt-24 flex-col items-center justify-center h-full white">
      <div className="flex flex-row items-start justify-center h-full max-w-[1240px] mx-auto px-4">
        <div className='flex-1 text-left'>
          <Tekst5/>
        </div>
      </div>
      <Support/>
      

      <Footer/>
  </div>
  );
}

export default about;
