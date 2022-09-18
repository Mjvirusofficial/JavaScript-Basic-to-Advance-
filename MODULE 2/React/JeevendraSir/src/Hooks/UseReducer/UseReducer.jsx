import React, { useReducer } from 'react'
import './UseReducer.css'

const mj = 0;
function Click(state,action){
// if(action.type === 'INCREMENT'){
//     return state + 1;
// }

// else{
//     return state - 1;
// }

switch (action.type) {
    case 'INCREMENT': return state + 1;

    case 'DECREMENT': return state - 1;

    default: return state;
}

}
function UseReducer() {
const [state,setstate] = useReducer(Click,mj)
  return (
    <div>
        <div className="div">
            <h1>This is UseReducer❤️</h1>
        </div>
        <div className="data">
            <h3>{state}</h3>
        </div>
        <div>
            <button onClick={()=>{setstate({type:'DECREMENT'})}}  className="button" >Decrement</button>
            <button onClick={()=>{setstate({type:'INCREMENT'})}}  className="button" >Increment</button>
        </div>
    </div>
  )
}

export default UseReducer