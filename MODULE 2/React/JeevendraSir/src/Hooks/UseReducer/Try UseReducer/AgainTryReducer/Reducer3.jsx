import React from 'react';
import './Reducer.css';
import { useReducer } from 'react';
import Function from './Function';

function Reducer3() {
    const iValue = 0;
    const [mj,virus] = useReducer(Function,iValue);
  return (
    <div>
        <h1>Use Reducer❤️</h1>
        <div className="box">
            <div>
            <button className="btn" onClick={()=>virus({type:'dec'})}>DEC</button>
            </div>

            <div className="CONTENT">
            <h2>{mj}</h2>
            </div>

            <div>
                <button className="btn" onClick={()=>virus({type:'inc'})}>INC</button>
            </div>
        </div>
    </div>
  )
}

export default Reducer3;