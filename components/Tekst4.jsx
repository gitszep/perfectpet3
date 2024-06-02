import React from 'react'
import Image from 'next/image';

const Tekst = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl text-white text-center font-bold mt-6  mb-10 hover:text-blue-400  ">
        Studio pielęgnacji zwierząt
      </h1>
      <div className="max-w-[1240px] mx-auto px-4 text-center">
      <div className='flex justify-center'>
        <Image src="negro.webp" className='photostyle2' alt="Pet Grooming" />
      </div>
      </div>
       <div>
        <h1 className="text-4xl text-white text-center font-bold mt-10 hover:text-blue-400"> Słów parę o czesaniu i pielęgnacji zwierząt domowych.</h1>
        </div>

  

      <div className="max-w-[1240px] px-4">
        <div className="">
          <div className='flex justify-center'>
            {/* img */}
          </div>
          <ul className='list-disc pl-4'> 
            <h3 className="text-2xl font-bold mt-10 mb-6 hover:text-blue-400 text-white">
              1. Czesanie:
            </h3>
            <p>
            Najbardziej podstawowa część pielęgnacji naszego zwierzaka. <br />
Należy czesać psy i koty długowłose minimum raz w tygodniu. <br />
Najlepiej zrobić to wieczorem, kiedy zwierzak jest najspokojniejszy, przy użyciu odżywki do rozczesywania sierści. <br />
Cotygodniowe rozczesanie zapewni brak kołtunów i mniejszy stres u psiego fryzjera. <br />
Rozczesujemy ze szczególną uwagą paszki, przednie łapy, "firankę", tylne łapy i miejsca za uszami. <br />
Rozczesujemy grzebieniem z szeroko rozstawionymi zębami schodząc do coraz gęstszego. <br />
Wygładzamy szczotką z naturalnego włosia. <br />
Obowiązkowo rozczesujemy przed i po kąpieli.
            </p>
          </ul>
          <ul className='list-disc pl-4'> 
            <h3 className="text-2xl font-bold mb-2 mt-4 hover:text-blue-400 text-white">
              2. Kąpiele:
            </h3>
            <p>

Bardzo ważna sprawa w utrzymaniu naszego pupila w zdrowiu i pięknym stanie włosa. <br />
Kąpiemy w zależności od potrzeby w dobrych kosmetykach dla zwierząt. <br />
Nawet delikatny szampon ludzki może podrażnić skórę naszego psa czy kota ze względu na inne pH... <br />
Szampon stosujemy zawsze z odpowiednią odżywką, kupujemy w zależności od rasy i okrywy włosowej. <br />
Do częstych kąpieli polecamy szampony głęboko nawilżające, ułatwiające rozczesywanie. <br />
Na specjalne okazje, np. show - możemy użyć szamponu podkreślającego kolor czy wybielającego (dla białego włosa). <br />
Nie polecamy jednak używania takich kosmetyków na co dzień, ponieważ mogą przesuszyć sierść naszego pupila. <br />
Odżywkę stosujemy zgodnie z instrukcją na kosmetyku - zazwyczaj producent zaleca pozostawienie jej na parę minut na zwierzęciu, aby lepiej zadziałała. <br />
Polecamy odżywki do spłukiwania - są łatwiejsze w użyciu i mniej obciążają włos.
            </p>
          </ul>
          <ul className='list-disc pl-4'> 
            <h3 className="text-2xl font-bold mb-2 mt-4 hover:text-blue-400 text-white">
              3. Pazurki i uszy:
            </h3>
            <p>
            Wrośnięte pazurki to ból dla naszego przyjaciela. <br />
Pamiętajmy, aby regularnie sprawdzać ich długość, ze szczególną uwagą sprawdzamy pierwsze pazury i wilcze (jeśli nasz pies je posiada). <br />
Małe pieski zazwyczaj nie zetrą sobie same - musimy o to zadbać, aby obyło się bez wrastania w opuszkę. <br />
Pazurki każdy groomer przycina w ramach wizyty; jeśli są za długie pomiędzy strzyżeniami, polecamy wizytę u weterynarza, który skróci pazurki lub zakup specjalnych cążków do samodzielnego skracania w domu. <br /><br />

Uszy - musimy zwrócić na nie uwagę, szczególnie u ras z klapniętymi uszami (spaniel, basset, maltańczyk, shih-tzu), które mają skłonności do zapaleń i podrażnień. <br />
Pilnujemy regularnego usuwania włosów z wlotu małżowiny usznej oraz wietrzymy uszy przy każdej okazji. <br />
Jeśli są brudne, przecieramy wacikiem. <br />
Osobiście nie jestem zwolennikiem wlewania płynów i gmerania w uszach bez potrzeby. <br />
Niechcący możemy tylko podrażnić ucho i narobić problemu. <br />
Regularna kontrola ucha i leczenie dokładne stanów chorobowych zapewnia zdrowe i czyste uszy. <br /><br />

Jeśli ucho jest czerwone, podrażnione, pies trzepie łbem i piszczy przy dotyku - KONIECZNIE idziemy do weterynarza. <br />
Nie podajemy psu leków na własną rękę!
            </p>
          </ul>
          <div className='flex justify-center'>
            <img src="negro.webp" className="photostyle mt-12" alt="Image 1"/>
          </div>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto py-4 px-4 text-center'>
      </div>
    </div>
  )
}

export default  Tekst