import { useState,useEffect } from 'react';
import Nav from '../components/Nav';

export default function Home(){

     const [show, setShow] = useState(false)
useEffect(()=>{
 
},[]);
    return (
      <>
      <Nav/>
        <h1 className='text-center text-8xl font-bold'>Home</h1>
        {show ? (
          <img
            loading='lazy'
            src="/src/foto (445).jpg"
            alt=""
            className='rounded-3xl shadow-2xs p-5'
          />
        ) : null}
        <button
          onClick={() => setShow(!show)}
          className='m-3 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105'
        >
          {show ? 'Hide Picture' : 'Show Picture'}
        </button>
      </>
    )
}