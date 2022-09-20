import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Increment,Decrement} from '../Action'
function IncrDecrCounter() {

const state = useSelector((state) => state.Incr_Decr_Reducer)
const dispatch = useDispatch()
  return (
    <div className='container'>
        <h1>Account Balance:{state}</h1>
        <button className="btn" onClick={() => dispatch(Decrement())}>Withdrwal</button>
        <button className="btn" onClick={() => dispatch(Increment())}>Deposite</button>
    </div>
  )
}

export default IncrDecrCounter

