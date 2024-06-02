import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('#ffffff'); // Set the initial color to white
  const [textColor, setTextColor] = useState('#000000'); // Set the initial text color to black

  const handleNav = () => {
    setNav(!nav);
    // Toggle body scroll based on nav state
    if (!nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#000000');
        setTextColor('#ffffff');
      } else {
        setColor('#ffffff');
        setTextColor('#000000');
      }
    };
    window.addEventListener('scroll', changeColor);
    // Cleanup event listener
    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 ${
        color === '#ffffff' ? 'border-2 border-black' : 'border-2 border-white'
      }`}
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl hover:text-blue-400'>
            Perfect Pet
          </h1>
        </Link>
        <ul className='hidden sm:flex'>
          <li className={`p-4 font-bold hover:text-blue-400 ${color === '#ffffff' ? 'text-black' : 'text-white'}`}>
            <Link href='/'>Home</Link>
          </li>
          <li className={`p-4 font-bold hover:text-blue-400 ${color === '#ffffff' ? 'text-black' : 'text-white'}`}>
            <Link href='/about'>About</Link>
          </li>
          <li className={`p-4 font-bold hover:text-blue-400 ${color === '#ffffff' ? 'text-black' : 'text-white'}`}>
            <Link href='/studio'>Studio Perfect Pet</Link>
          </li>
          <li className={`p-4 font-bold hover:text-blue-400 ${color === '#ffffff' ? 'text-black' : 'text-white'}`}>
            <Link href='/services'>Usługi</Link>
          </li>
          <li className={`p-4 font-bold hover:text-blue-400 ${color === '#ffffff' ? 'text-black' : 'text-white'}`}>
            <Link href='/grooming'>Grooming - porady</Link>
          </li>
          <li className={`p-4 font-bold hover:text-blue-400 ${color === '#ffffff' ? 'text-black' : 'text-white'}`}>
            <Link href='/gallery'>Galeria</Link>
          </li>
          <li className={`p-4 font-bold hover:text-blue-400 ${color === '#ffffff' ? 'text-black' : 'text-white'}`}>
            <Link href='/contact'>Kontakt</Link>
          </li>
          <li className={`p-4 font-bold hover:text-blue-400 ${color === '#ffffff' ? 'text-black' : 'text-white'}`}>
            <Link href='/friends'>Przyjaciele</Link>
          </li>
          <li className={`p-4 font-bold hover:text-blue-400 ${color === '#ffffff' ? 'text-black' : 'text-white'}`}>
            <Link href='/prices'>Cennik usług</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${color}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className='sm:hidden fixed top-0 left-0 right-0 bottom-0 bg-black text-center ease-in duration-300 overflow-y-auto'
          style={{ display: nav ? 'block' : 'none' }}
        >
          <div className='max-w-[320px] m-auto py-8'>
            <ul className='space-y-4'>
              <li onClick={handleNav} className={`text-2xl hover:text-blue-400 ${color === '#ffffff' ? 'text-white' : 'text-white'}`}>
                <Link href='/'>Home</Link>
              </li>
              <li onClick={handleNav} className={`text-2xl hover:text-blue-400 ${color === '#ffffff' ? 'text-white' : 'text-white'}`}>
                <Link href='/about'>O mnie</Link>
              </li>
              <li onClick={handleNav} className={`text-2xl hover:text-blue-400 ${color === '#ffffff' ? 'text-white' : 'text-white'}`}>
                <Link href='/studio'>Studio Perfect Pet</Link>
              </li>
              <li onClick={handleNav} className={`text-2xl hover:text-blue-400 ${color === '#ffffff' ? 'text-white' : 'text-white'}`}>
                <Link href='/services'>Usługi</Link>
              </li>
              <li onClick={handleNav} className={`text-2xl hover:text-blue-400 ${color === '#ffffff' ? 'text-white' : 'text-white'}`}>
                <Link href='/grooming'>Grooming</Link>
              </li>
              <li onClick={handleNav} className={`text-2xl hover:text-blue-400 ${color === '#ffffff' ? 'text-white' : 'text-white'}`}>
                <Link href='/gallery'>Galeria</Link>
              </li>
              <li onClick={handleNav} className={`text-2xl hover:text-blue-400 ${color === '#ffffff' ? 'text-white' : 'text-white'}`}>
                <Link href='/contact'>Kontakt</Link>
              </li>
              <li onClick={handleNav} className={`text-2xl hover:text-blue-400 ${color === '#ffffff' ? 'text-black' : 'text-white'}`}>
                <Link href='/friends'>Przyjaciele</Link>
              </li>
              <li onClick={handleNav} className={`text-2xl hover:text-blue-400 ${color === '#ffffff' ? 'text-black' : 'text-white'}`}>
                <Link href='/prices'>Cennik usług</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
