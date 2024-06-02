import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function App() {
  const slides = [
    {
      url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/442478121_964949472299410_6848035530957889267_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=U_MYwLzOjJsQ7kNvgHBEn-4&_nc_ht=scontent-waw2-2.xx&oh=00_AYB2QmP5719vHpeWRZvuji8c9nCI9vJ1OlSGJftoW-WklA&oe=6662541F',
    },
    {
      url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/407353225_845919597535732_7668629661821497313_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XgEpzuVssBMQ7kNvgE8Wl4k&_nc_ht=scontent-waw2-2.xx&oh=00_AYC5ixz25Aon9lksHQiqGL2pAAinggbepUBMEkCN2HKuQg&oe=6662564D',
    },
    {
      url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/420496279_880086897452335_4582965861046070317_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bsQ4SukDBAgQ7kNvgG0uqWC&_nc_ht=scontent-waw2-2.xx&oh=00_AYBzZ2NJ2u5yZk2QzjU5lNBH7uKEXV3QaGSoiAlkE7ic4Q&oe=666261CC',
    },
    {
      url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/420652430_880087084118983_7877997814308478241_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mPha1glI1TgQ7kNvgHnYdS3&_nc_ht=scontent-waw2-2.xx&oh=00_AYBReOuMKBhBwjzGaVFveYvrmiIGdshAIFg7ArTGGyDrNQ&oe=666267D4',
    },
    {
        url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/420621524_880083964119295_6783499077716850686_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LqgFCQoequIQ7kNvgG0Eiiv&_nc_ht=scontent-waw2-2.xx&oh=00_AYC86R6ccpyXwVCodcIk9yc5qmxhRrqiMGN5ZQAmq7ooKw&oe=666236BD',
    },
    {
        url: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/445502814_967268418734182_6514837860723527404_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Nckjs1a10gYQ7kNvgFUT4QH&_nc_ht=scontent-waw2-2.xx&oh=00_AYAcFNptiDhsjaG67PDcnDLkqM-HXYcoReaYW3bfT01qew&oe=666246C6',
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='max-w-[1200px] h-[700px] w-full mt-6 m-auto pt-8 px-4 relative group'>
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
