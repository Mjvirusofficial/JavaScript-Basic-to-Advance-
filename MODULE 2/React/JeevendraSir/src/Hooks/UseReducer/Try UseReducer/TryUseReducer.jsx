import React, { useReducer } from 'react'

function TryUseReducer() {
const iValue = 0;
const [mj,virus] = useReducer(Mjvirus,iValue)

function Mjvirus(mj,action){
  switch (action.type) {
    case 'inc': return mj + 1;
    
    case 'dec': return mj - 1;

    default: return mj;
  }
}
  return (
    <div>
      <h1>Try @gain UseReducer❤️</h1>
      <div className="box">
        <div className="ele">
        <button onClick={()=>virus({type:'inc'})}>+</button>

        </div>

        <div className="ele">
         <h2>{mj}</h2>
        </div>

        <div className="ele">
        <button onClick={()=>virus({type:'dec'})}>-</button>
        </div>
      </div>
    </div>
  )
}

export default TryUseReducer



