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
        <img src="negro.webp" className='photostyle2' alt="Pet Grooming" />
      </div>
      </div>
       <div>
        <h1 className="text-4xl text-white text-center font-bold mt-10 hover:text-blue-400">Kilka słów o psim fryzjerze</h1>
        </div>

      <div className="max-w-[1240px] px-4">
        <div className="">
          <div className='flex justify-center'>
            {/* img */}
          </div>
          <p className='py-4 mt-10 '>
         

          Przez całe moje życie towarzyszą mi psy. <br />
          Od najmłodszych lat, obok mnie zawsze chodziły czworonogi &#8211; te z czterema łapami, wilgotnymi nosami i wiecznie merdającymi ogonami. <br />
          Od maleńkości zainteresowałam się pielęgnacją psów. Już jako dziecko, razem z mamą, chwytałam za grzebień i szczotkę, by pielęgnować naszych futrzastych przyjaciół. <br />
          I to zainteresowanie zostało ze mną do dzisiaj. <br /><br />

          Pierwsze kroki stawiałam z pudlem, który został przez nas przygarnięty. <br />
          Później pojawiły się kundelki, jamnik długowłosy, a potem mój pierwszy własny pies &#8211; cocker spaniel. <br />
          Mimo że był bez rodowodu, wiedziałam, że będę musiała poświęcić mu dużo uwagi ze względu na pielęgnację jego sierści. <br />
          Niestety, szukając profesjonalnej opieki dla cockera, zauważyłam, że w moim mieście trudno znaleźć kogoś, kto potrafiłby właściwie zająć się jego sierścią. <br />
          Tak więc Negro stał się moim osobistym projektem do testowania różnych technik pielęgnacji, jak strzyżenie, trymowanie czy techniki &#8220;rolling coat&#8221;, oraz do poznania pierwszych profesjonalnych narzędzi. <br /><br />

          Fascynacja pielęgnacją psów zaczęła mnie wciągać coraz bardziej. <br />
          Wybrałam się nawet na seminarium z pielęgnacji rasy prowadzone przez znanego hodowcę z Serbii. <br />
          Dzięki temu mogłam rozwijać swoje umiejętności i pielęgnować psy jeszcze lepiej niż dotychczas. <br />
          Dzięki Negrowi poznałam wiele wspaniałych osób, które pomagały mi rozwijać mój warsztat i podpowiadały, co robić lepiej. <br /><br />

          Z czasem pojawiły się psy rasowe, które startują z powodzeniem na wystawach i są chwalone za pielęgnację. <br />
          Jednak życie nie kręci się tylko wokół spanieli. <br />
          Rok temu do naszej rodzinki dołączył wspaniały pudel miniaturowy, Rico. <br />
          Coraz więcej czasu poświęcam na strzyżenie komercyjne małych ras, oraz na nowoczesne strzyżenie, które pozwala zachować maksymalny komfort psa, podkreślając jednocześnie jego urodę. <br /><br />

          Dzięki uczestnictwu w kursach, szkoleniach i seminariach, poziom usług dla Państwa pupila będzie zawsze na najwyższym poziomie. <br />
          W mojej pracy staram się być jak najmniej stresującym groomerem, aby psiaki dobrze kojarzyły zabiegi pielęgnacyjne. <br />
          Pracuję na nowoczesnym sprzęcie renomowanych firm groomerskich oraz z doskonałymi kosmetykami, zapewniającymi najlepsze efekty pielęgnacyjne. <br />
          Strzyżenie nie musi być stresujące.
          </p>
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

export default Tekst
