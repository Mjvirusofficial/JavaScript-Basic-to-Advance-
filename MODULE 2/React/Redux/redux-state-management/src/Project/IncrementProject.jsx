import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Increment } from '../Action';

function IncrementProject() {

  const state = useSelector((state) => state.IncrementReducer)
  const d = useDispatch()
  return (
    <div>
        <h2>{state}</h2>
      <button onClick={() => d(Increment())}>Increment</button>
    </div>
  )
}

export default IncrementProject