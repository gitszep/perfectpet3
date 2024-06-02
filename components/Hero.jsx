import Link from 'next/link';
import React from 'react';

const Hero = ({heading, message}) => {
  return (
    <div  className='flex items-center justify-center mt-28  bg-fixed  bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0  z-[2]' />
      <div className='p-5 text-white z-[2]'>

      
      </div>
    </div>
  );
};

export default Hero;
