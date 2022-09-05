import React, { createContext, useState } from 'react'
import OtherChild from './OtherChild'

export const Data = createContext();
function Parents() {

  const [color,setColor] = useState('green')
  return (
    <Data.Provider value={{textColor:color}}>
      <div>
        <h1>This is Parent Component</h1>
        <OtherChild/>
      </div>
    </Data.Provider>
  )
}

export default Parents