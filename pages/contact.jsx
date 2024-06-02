import React from 'react';
import Tekst4 from '../components/Tekst4';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 flex-col items-center justify-center mt-24">
        <div className="flex flex-row items-start justify-center h-full max-w-[1240px] mx-auto px-4">
          <div className='flex-1 text-left'>
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
