import React from 'react';
import Tekst4 from '../components/Tekst4';
import Footer from '../components/Footer';
import Link from 'next/link';

const about = () => {
  return (
    <div className="flex mt-24 flex-col items-center justify-center h-full white">
      <div className="flex flex-row items-start justify-center h-full max-w-[1240px] mx-auto px-4">
        <div className='flex-1 text-left'>
          <Tekst4/>
        </div>
      </div>
      
      <div className="flex justify-center items-center mt-2 mb-10">
      <Link href="/contact">
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 hover:text-blue-400 hover:shadow-lg transition duration-300">
              Napisz do nas
            </button>
          </Link>
          </div>
      <Footer/>
  </div>
  );
}

export default about;
