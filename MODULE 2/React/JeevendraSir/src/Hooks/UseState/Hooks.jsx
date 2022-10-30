import React, { useState } from 'react'
import './Hooks.css'
function Hooks() {
  const [count, setcount] = useState(0)
  const [count2, setcount2] = useState(0)
  const [count3, setcount3] = useState(0)
  const [count4, setcount4] = useState(0)
  
  // setcount(count+1)
  return (

    <div className=''>
      {/* <h2 className='zero'>{count}</h2>
         <button className='button' onClick={()=>{setcount(count-1)}}>Click me</button>
         <button className='button' onClick={()=>{setcount(count+1)}}>Click me</button> */}
      <h1 class='heading'> Vote Your Language!</h1>
      {/* <div className="container">
        <ul>
          <li>
            <div className="content">
              <div className="">
                <h5>{count}</h5>
              </div>

              <div className="value">
                <h5>PHP</h5>
              </div>
              <div className="value">
            <h5 className='btn' onClick={()=>{setcount(count+1)}}>Click me</h5>
              </div>
            </div>

          </li>
        </ul>
      </div> */}


      <div className="container">
        <div className="row content">
          <div className="col">
            <ul><li>{count}</li></ul>
          </div>

          <div className="col">
            <ul><li>PHP</li></ul>
          </div>

          <div className="col">
            <ul><li>
              <h5 className='btn' onClick={() => { setcount(count + 1) }}>Click me</h5>
            </li></ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row content">
          <div className="col">
            <ul><li>{count2}</li></ul>
          </div>

          <div className="col">
            <ul><li>Python</li></ul>
          </div>

          <div className="col">
            <ul><li>
              <h5 className='btn' onClick={() => { setcount2(count2 + 1) }}>Click me</h5>
            </li></ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row content">
          <div className="col">
            <ul><li>{count3}</li></ul>
          </div>

          <div className="col">
            <ul><li>React</li></ul>
          </div>

          <div className="col">
            <ul><li>
              <h5 className='btn' onClick={() => { setcount3(count3 + 1) }}>Click me</h5>
            </li></ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row content">
          <div className="col">
            <ul><li>{count4}</li></ul>
          </div>

          <div className="col">
            <ul><li>Java</li></ul>
          </div>

          <div className="col">
            <ul><li>
              <h5 className='btn' onClick={() => { setcount4(count4 + 1) }}>Click me</h5>
            </li></ul>
          </div>
        </div>
        <h1 className='name'>Coded by:- Mj virus❤️</h1>
      </div>

      
    </div>
  )
}

export default Hooks