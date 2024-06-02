import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function App() {
  const slides = [
    {
      url: 'https://static.wixstatic.com/media/249d52_de255481f81214af9ce3c82fe9056785.jpg/v1/fill/w_476,h_391,al_c,lg_1,q_80,enc_auto/249d52_de255481f81214af9ce3c82fe9056785.jpg',
    },
    {
      url: 'https://static.wixstatic.com/media/249d52_d4cebaecdb47d51ace3024003c5e85d4.jpg/v1/fill/w_476,h_391,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_d4cebaecdb47d51ace3024003c5e85d4.jpg',
    },
    {
      url: 'https://static.wixstatic.com/media/249d52_56cb137dec24a4c04e3ca1e620a48c41.jpg/v1/fill/w_476,h_391,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_56cb137dec24a4c04e3ca1e620a48c41.jpg',
    },
    {
      url: 'https://static.wixstatic.com/media/249d52_4a3d87ea1e28e9532671482eb6ee2108.jpg/v1/fill/w_476,h_391,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/249d52_4a3d87ea1e28e9532671482eb6ee2108.jpg',
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
