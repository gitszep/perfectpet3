import React from 'react';
import { Link } from 'next/link';
import Image from 'next/image';

const PetGroomingStudio = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl text-white text-center font-bold mt-6 mb-10 hover:text-blue-400">
          Studio pielęgnacji zwierząt
        </h1>
        <div className="max-w-[1240px] mx-auto px-4 text-center">
          <div className="flex justify-center">
            <Image src="/negro.webp" className="photostyle2" alt="Pet Grooming" width={500} height={300} />
          </div>
        </div>

        <div>
          <h2 className="text-4xl text-white text-center font-bold mt-10 hover:text-blue-400">Studio Perfect Pet oferuje</h2>
        </div>

        <div className="max-w-[1240px] px-4">
          <ul className="list-disc pl-4">
            <li>Strzyżenie według wzorców FCI.</li>
          </ul>
        </div>

        <div className="flex justify-center items-center mt-2 mb-10">
          <Link href="/contact">
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 hover:text-blue-400 hover:shadow-lg transition duration-300">
              Napisz do nas
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PetGroomingStudio;