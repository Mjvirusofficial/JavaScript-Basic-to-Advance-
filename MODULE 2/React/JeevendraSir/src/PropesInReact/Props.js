import React from 'react';
import './Props.css';
export default function Props(props) {
  return (
    <div>
     <>
        <div className='props'>
          <h1>This is {props.name} Search on Youtube:- {props.youtube}</h1>
          <h2>Code:-{props.code}</h2>
        </div>
     </>
    </div>
  )
}
