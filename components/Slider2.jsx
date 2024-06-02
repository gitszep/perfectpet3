import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx'; // Ensure this import is added

function App() {
  const slides = [
    {
      url: 'https://static.wixstatic.com/media/249d52_64428505127267f0915519f8db283547.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_64428505127267f0915519f8db283547.jpg',
    },
    {
      url: 'https://static.wixstatic.com/media/249d52_befdbfe7c3aa4ae33b375d390c78c8a1.jpg/v1/fill/w_569,h_758,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/249d52_befdbfe7c3aa4ae33b375d390c78c8a1.jpg',
    },
    {
      url: 'https://static.wixstatic.com/media/249d52_61db3ceb71c8410c2a00118b63c754ec.jpg/v1/fill/w_569,h_758,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/249d52_61db3ceb71c8410c2a00118b63c754ec.jpg',
    },
    {
      url: 'https://static.wixstatic.com/media/249d52_93cca3aa5316cb2dcaef8802090e2f43.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_93cca3aa5316cb2dcaef8802090e2f43.jpg',
    },
    {
      url: 'https://static.wixstatic.com/media/249d52_3b0f115d97e375fd83e43b4b47bbbed9.jpg/v1/fill/w_600,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_3b0f115d97e375fd83e43b4b47bbbed9.jpg',
    },
    {
      url: 'https://static.wixstatic.com/media/249d52_43e998d2c96890539c1bddcbd82cdb83.jpg/v1/fill/w_1011,h_379,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/249d52_43e998d2c96890539c1bddcbd82cdb83.jpg',
    },
    {
      url: 'https://static.wixstatic.com/media/249d52_637dc92ca98ee7dd8631ddedbf07b4ab.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_637dc92ca98ee7dd8631ddedbf07b4ab.jpg',
    },
    {
      url: 'https://static.wixstatic.com/media/249d52_065b0b2234fa159510a6e471133a9510.jpg/v1/fill/w_600,h_450,al_c,q_80,enc_auto/249d52_065b0b2234fa159510a6e471133a9510.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[650px] h-[580px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
