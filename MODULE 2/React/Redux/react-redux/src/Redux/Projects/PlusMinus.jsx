import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Increment,Decrement} from '../Action';

function PlusMinus() {
  const Mj = useSelector((state) => state.PlusMinusReducer)
  const Virus = useDispatch()
  return (
    <div>
     <h1>Increment/Decrement Counter❤️</h1>
     <h2>{Mj}</h2>
     <button onClick={()=>Virus(Decrement())}>Decr</button>
     <button onClick={()=>Virus(Increment())}>Incr</button>
    </div>
  )
}

export default PlusMinus;