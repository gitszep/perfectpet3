import Link from 'next/link'
import React from 'react'

const Tekst = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl text-white text-center font-bold mt-6  mb-10 hover:text-blue-400  ">
        Studio pielęgnacji zwierząt
      </h1>
      <div className="max-w-[1240px] mx-auto px-4 text-center">
      <div className='flex justify-center'>
        <img src="negro.webp" className='photostyle2' alt="Pet Grooming" />
      </div>
      </div>
       <div>
        <h1 className="text-4xl text-white text-center font-bold mt-10 hover:text-blue-400"> Studio Perfect Pet oferuje</h1>
        </div>



      <div className="max-w-[1240px] px-4">
        <div className="">
          <div className='flex justify-center'>
            {/* img */}
          </div>
          <ul className='list-disc pl-4'> 
            <h3 className="text-2xl font-bold mt-8 mb-2 hover:text-blue-400 text-white">
              1.Usługi :
            </h3>
            <p>
            <li>Strzyżenie według wzorców FCI.</li>
            <li>Stylizacja na indywidualne zyczenie.</li>
            <li>Strzyżenie psów nierasowych.</li>
            <li>Strzyżenie psów agresywnych-trudnych-po konsultacji i obejrzeniu psa przy właścicielu.</li>
            <li>Strzyżenie kotów bez narkozy.</li>
            <li>Trymowanie –usuwanie martwej okrywy włosowej (spaniele,setery,golden retrivery,teriery).</li>
            <li>Rozczesywanie skołtunionego włosa i jego regeneracja.</li>
            <li>Wyczesywanie psów krótkowłosych- tzn sypiach się-jamniki,labradory,mopsy,Beagle,boksery.</li>
            <li>Kosmetyka :Czyszczenie uszu,depilacja uszu,przycinanie pazurków.</li>
            <li>Sprzedaż profesjonalnych szamponów, odżywek,akcesoriów do pielęgnacji zwierząt.</li>


            </p>
          </ul>
          <ul className='list-disc pl-4'> 
            <h3 className="text-2xl font-bold mb-2 mt-4 hover:text-blue-400 text-white">
            Wystawy FCI            
            </h3>
            <p>
            Studio Perfect Pet oferuje grooming wystawowy niektórych ras.<br/>
            Specjalizacja Cocker spaniel angielski,Golden Retriver,Sznaucer.<br/>
            Aby umówić inne rasy-Proszę o wcześniejszy kontakt.
            </p>
          </ul>
          <ul className='list-disc pl-4'> 
            <h3 className="text-2xl font-bold mb-2 mt-4 hover:text-blue-400 text-white">
            Pielęgnacja         
            </h3>
            <p>
            Studio Perfect Pet oferuje grooming wystawowy niektórych ras.<br/>
            Specjalizacja Cocker spaniel angielski,Golden Retriver,Sznaucer.<br/>
            Aby umówić inne rasy-Proszę o wcześniejszy kontakt.
            </p>
          </ul>
          <ul className='list-disc pl-4'> 
            <h3 className="text-2xl font-bold mb-2 mt-4 hover:text-blue-400 text-white">
            Strzyżenie            
            </h3>

            <p>
            Strzyżenie psów rasowych oraz mieszańców.

Perfekcyjne modne stylizacje na życzenie klienta.<br/>

Zmniejszanie objętośći okrywy włosowej,strzyżenie nożyczkami,korekty groomerskie.

<br/>Wizyty dla szczeniaczków do 3 miesiąca życia-Pierwszy kontakt.

Strzyżenie psów bardzo dużych.
            </p>
          </ul>
          <ul className='list-disc pl-4'> 
            <h3 className="text-2xl font-bold mb-2 mt-4 hover:text-blue-400 text-white">
            Trymowanie            </h3>

            <p>
            Trymowanie to usuwanie martwej okrywy włosowej.

Oferuje trymowanie: <br/>spanieli,terierow,seterów,golden retriverow,wyżłów,psów o szorstkiej strukturze szaty.<br/>

Usuwanie martwej okrywy włosowej z psów tzw "sypiacych sie" np beagle, <br/>labradory,boksery,gładkowłose rasy.<br/>

Zabieg poprawia ukrwienie włosa,sprawia ze szata psa jest łatwa do pielęgnacji i przestaje się kołtunić.
            </p>
          </ul>
          
          





         
          <div className='flex justify-center'>
            <img src="negro.webp" className="photostyle2 mt-12" alt="Image 1"/>
          </div>
        </div>
        
      </div>
      
      <div className='max-w-[1240px] mx-auto py-4 px-4 text-center'>
        
      </div>
      <div className="flex justify-center items-center mt-2 mb-10">
      <Link href="/contact">
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 hover:text-blue-400 hover:shadow-lg transition duration-300">
              Napisz do nas
            </button>
          </Link>
          </div>
    </div>
  )
}

export default  Tekst