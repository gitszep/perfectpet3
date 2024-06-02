import React, { useState } from 'react';
import Image from 'next/image';
import reebok from '../public/reebook.webp';
import nike from '../public/nike.jpg';
import puma from '../public/puma.jpg';
import Link from 'next/link';

const Support = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [filter, setFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const containers = [
    {
      icon: <Image src={reebok} width={300} height={200} className='object-cover' />,
      title: 'Psy małe do 10 kg',
      content: 'Psy długowłose:<br/> kąpiel + odżywka-maska, <br/> rozczesanie,kosmetyka<br/> 30-60 zł<br/> Psy krótkowłose: <br/> kąpiel-odżywka,kosmetyka <br/> 40zł <br/> strzyżenie pełny pakiet <br/> kąpiel regenerujaca <br/>rozczesanie,strzyżenie,<br/>pełna kosmetyka,finish <br/>60-80 zł <br/> trymowanie  rozczesanie, <br/> delikatna kąpiel,stylizacja <br/> 70-120 zł <br/> rozczesywanie skołtunionego włosa <br/> 60zł/h',
      link: 'https://www.reebok.eu/pl-pl'
    },
    {
      icon: <Image src={puma} width={300} height={200} className='object-cover' />,
      title: 'Psy średnie 10-20 kg',
      category: 'Puma',
      content: 'Psy długowłose:<br/> kąpiel + odżywka-maska, <br/> rozczesanie,kosmetyka<br/>  70 zł <br/> Psy krótkowłose:<br/> kąpiel-odżywka,kosmetyka <br/> 60 zł<br/> strzyżenie pełny pakiet<br/> kąpiel regenerujaca<br/>rozczesanie,strzyżenie <br/> pełna kosmetyka,finish <br/> 70-150 zł <br/> trymowanie  rozczesanie<br/> delikatna kąpiel,stylizacja<br/> od 100 zł <br/> rozczesywanie skołtunionego włosa <br/> 60/h ',
      link: 'https://eu.puma.com/pl/pl/home'
    },
    {
      icon: <Image src={nike} width={300} height={200} className='object-cover' />,
      title: 'Psy duże 20 kg',
      category: 'Nike',
      content: 'Psy długowłose: <br/> kąpiel + odżywka-maska, <br/> rozczesanie,kosmetyka<br/>  50-180 zł <br/>  Psy krótkowłose: <br/> kąpiel-odżywka,kosmetyka <br/> Strzyżenie pełny pakiet <br/> kąpiel regenerujaca <br/>rozczesanie,strzyżenie,pełna kosmetyka,finish <br/> 100-300 zł <br/> trymowanie  rozczesanie <br/> delikatna kąpiel,stylizacja <br/> od 150zł <br/>rozczesywanie skołtunionego włosa <br/> 80zł/h ',
      link: 'https://www.nike.com/pl/'
    },
  ];

  const handleToggle = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div name='support' className='w-full'>
      <div className="flex flex-col items-center justify-center h-full">
        <div className='max-w-[1240px] mx-auto text-black relative'>
          <div className='px-4 py-4'>
            {/* Removed extra padding and margin */}
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-8 px-4 mb-20 text-black'>
            {containers.map((container, index) => (
              // Add a condition to check if the container matches the current category filter
              (categoryFilter === '' || container.category === categoryFilter) &&
              // Add a condition to check if the container title contains the given filter
              (container.title.toLowerCase().includes(filter.toLowerCase())) && (
                <div key={index} className={`bg-white rounded-xl shadow-2xl ${expandedIndex === index ? 'h-auto' : 'h-[fit-content]'}`}>
                  <div className='p-8 flex flex-col items-center'>
                    <div className='w-[300px] h-[200px] overflow-hidden rounded-lg mb-4'>
                      {container.icon}
                    </div>
                    <h3 className='font-bold text-2xl my-6'>{container.title}</h3>
                    <button className="bg-black text-white font-bold py-2 px-4 rounded" onClick={() => handleToggle(index)}>
                      {expandedIndex === index ? 'Ukryj' : 'Zobacz'}
                    </button>
                    {expandedIndex === index && (
                      <p className='text-gray-600 mt-4 font-serif text-xl text-center' dangerouslySetInnerHTML={{ __html: container.content }} />
                    )}
                  </div>
                </div>
              )
            ))}
          </div>
          <div className='flex justify-center mt-10 mb-10'>
            <img src="/negro.webp" alt="Negro4" className='object-cover photostyle2' />
          </div>
          <div className="flex justify-center items-center mt-2 mb-10">
            <Link href="/contact">
              <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 hover:text-blue-400 hover:shadow-lg transition duration-300">
                Napisz do nas
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;