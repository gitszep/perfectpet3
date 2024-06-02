import React from 'react';
import Tekst6 from '../components/Tekst6';
import Footer from '../components/Footer';

const about = () => {
  return (
    <div className="flex mt-24 flex-col items-center justify-center h-full white">
      <div className="flex flex-row items-start justify-center h-full max-w-[1240px] mx-auto px-4">
        <div className='flex-1 text-left'>
          <Tekst6/>
        </div>
      </div>
      
      

      <Footer/>
  </div>
  );
}

export default about;
