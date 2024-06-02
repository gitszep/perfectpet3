import React from 'react';
import Tekst7 from '../components/Tekst7';
import Footer from '../components/Footer';
import Slider2 from '../components/Slider2';
import Slider3 from '../components/Slider3';
import Link from 'next/link';
import Image from 'next/image';


const about = () => {
  return (
    <div className="flex mt-24 flex-col items-center justify-center h-full white">
      <div className="flex flex-row items-start justify-center h-full max-w-[1240px] mx-auto px-4">
        <div className='flex-1 text-left'>
          <Tekst7/>
        </div>
      </div>
      

     
    <Slider2/>
    <h3 className="text-2xl text-left font-bold mt-10 mb-2 hover:text-blue-400 text-white">
    Rodowód Fada            </h3> 
        <p className='py-4'>
        Fadus nie jest wystawiany ale odwiedza mnie regularnie na strzyżeniu.

        </p>
    <Slider3/>




      <div className='flex justify-center'>
            <Image src="negro.webp" className="photostyle2 mt-12" alt="Image 1"/>
          </div>
      
          <div className="flex justify-center items-center mt-10 mb-10">
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
