import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';

const Contact = () => {
  const [state, handleSubmit] = useForm("xayrkyzq");

  if (state.succeeded) {
    return <p className='text-center text-2xl font-bold'>Dziękujemy za wysłanie wiadomości!</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl text-white text-center font-bold mt-6 mb-10 hover:text-blue-400">
        Studio pielęgnacji zwierząt
      </h1>
      <div className="max-w-[1240px] mx-auto px-4 text-center">
        <div className='flex justify-center'>
          <img src="negro.webp" className='photostyle2' alt="Pet Grooming" />
        </div>
      </div>
      <div className='max-w-[1240px] m-auto p-4 '>
        <h1 className='text-white hover:text-blue-400 font-bold mt-2 text-center p-4'>Wyślij wiadomość</h1>
        <form onSubmit={handleSubmit} className='max-w-[600px] m-auto mb-12'>
          <div  className='grid grid-cols-2 gap-2 mt-10 '>
            <input className='border shadow-lg p-3' type="text" placeholder='Nazwa' name="name" />
            <input className='border shadow-lg p-3' type="email" placeholder='Email' name="email" />
          </div>
          <textarea className='border shadow-lg p-3 w-full my-2' cols="2" rows="2" placeholder='Wiadomość' name="message"></textarea>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button type="submit" className='border shadow-lg text-white bg-blue-400 p-3 w-full mt-2' disabled={state.submitting}>
            Wyślij
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact