import React, { useState } from 'react'
import './Hooks.css'
function Hooks() {
    const [count,setcount] = useState(0)
    // setcount(count+1)
  return (
    
      <div className='box'>
         <h2 className='zero'>{count}</h2>
         <button className='button' onClick={()=>{setcount(count+1)}}>Click me</button>
      </div>
    
  )
}

export default Hooks