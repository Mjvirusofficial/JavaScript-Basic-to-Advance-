import React, { useEffect, useState } from 'react';
import './UseEffect.css'

function Useeffect() {
   const [count1,setCount1] = useState(0)
   const [count2,setCount2] = useState(0)
   
   //Button 1
   useEffect(()=>{
    alert('BUTTON 1 IS CLICKED')
   },[count1])

   //Button 2
   useEffect(()=>{
    alert('BUTTON 2 IS CLICKED')
   },[count2])
  return (
   
    <div>
        <button className='button' onClick={()=>{setCount1(count1+1)}}>Click me {count1}</button>
        <br />
        <button className='button' onClick={()=>{setCount2(count2+1)}}>Click me {count2}</button>
        
    </div>
  )
}

export default Useeffect