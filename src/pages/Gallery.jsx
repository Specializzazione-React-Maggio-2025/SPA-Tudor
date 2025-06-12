import { useState, useEffect } from 'react';
import Nav from '../components/Nav';

export default function Gallery (){
const [data,setData]=useState([]);
useEffect(()=>{
 async function fetchData() {
    const response =await fetch('https://dog.ceo/api/breeds/image/random')
    const json= await response.json();
    setData([json.message])
    console.log(json);
    
    
 }  
fetchData();
},[])
    return(
        <>
        <Nav/>
        
        
    <h1 className='text-center text-8xl font-bold'>Gallery </h1>

    <div className="flex justify-center"> {/* Center the card horizontally */}
            <div className="rounded-lg shadow-lg max-w-md mx-auto mt-9"> {/* Card container with max-width and auto margins for centering */}
              <img
                src={data[0]}
                alt="Random Dog"
                className="rounded-t-lg object-cover h-auto w-full" /* Make image responsive within the card */
              />
              <div className="p-6">
                <p className="text-gray-700 text-base">
                  Here's a random dog image!
                </p>
              </div>
            </div>
        </div>
    </>
    )
}
