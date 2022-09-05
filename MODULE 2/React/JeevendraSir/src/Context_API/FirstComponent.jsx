import React, { createContext } from 'react'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'

export const fname = createContext()

function FirstComponent() {
  return (
    <div>
    <h1>Hii,</h1>
    <SecondComponent/>
    <fname.Provider value={"Deepak"}>
        <ThirdComponent/>
    </fname.Provider>
    </div>
  )
}

export default FirstComponent