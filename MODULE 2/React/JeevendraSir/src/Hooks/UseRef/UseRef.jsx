import React from 'react';
import './UseRef.css';
import { useRef } from 'react';

function UseRef() {
const nameRef = useRef();
const emailRef = useRef();

function renderUseRef(){ 
   alert(`Your name is:- ${nameRef.current.value} and email is:- ${emailRef.current.value}`);
}
  return (
    <div>
      <h1>This is UseRef❤️</h1>
      <form action="" onSubmit={renderUseRef}>
       <input type="text" ref={nameRef} className='input'  placeholder='Enter your name...'/> <br/>
       <input type="text" ref={emailRef} className='input' placeholder='Enter your email...'/> <br/>
       <button className='button'>Submit</button>
       
      </form>
    </div>

  )
}

export default UseRef