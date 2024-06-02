import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const [textColor, setTextColor] = useState('white');

  return (
    <div className='w-full footer py-16 flex flex-col justify-between items-center'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1 className="text-white hover:text-blue-400">Perfect Pet</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <a href="https://www.facebook.com/PerfectPetStudio/" target="_blank" rel="noopener noreferrer" className="icon hover:text-blue-400">
              <FaFacebook />
            </a>
            <FaTwitter className='icon hover:text-blue-400' />
            <FaYoutube className='icon hover:text-blue-400' />
            <FaInstagram className='icon hover:text-blue-400' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex text-white font-bold'>
            <li className='hover:text-blue-400'>perfectpet@onet.pl</li>
            <li className='hover:text-blue-400'>+48-602-302-140</li>
            <li className='hover:text-blue-400'>ul.Kubiny 108  Częstochowa </li>
            <li className='p-4 font-bold hover:text-blue-400'>
              <Link href='/studio'>Studio</Link>
            </li>
            <li className='p-4 font-bold hover:text-blue-400'>
              <Link href='/grooming'>Grooming</Link>
            </li>
          </ul>
          <ul className='text-right text-white lg:flex'>
            <li className='p-4 font-bold hover:text-blue-400'>
              <Link href='/'>Home</Link>
            </li>
            <li className='p-4 font-bold hover:text-blue-400'>
              <Link href='/about'>About</Link>
            </li>
            <li className='p-4 font-bold hover:text-blue-400'>
              <Link href='/services'>Usługi</Link>
            </li>
            <li className='p-4 font-bold hover:text-blue-400'>
              <Link href='/gallery'>Galeria</Link>
            </li>
            <li className='p-4 font-bold hover:text-blue-400'>
              <Link href='/contact'>Kontakt</Link>
            </li>
            <li className='p-4 font-bold hover:text-blue-400'>
              <Link href='/prices'>Cennik</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-white mt-4 font-bold text-xs text-center hover:text-blue-400">@Created by Szepelak all rights reserved</p>
    </div>
  );
};

export default Footer;
