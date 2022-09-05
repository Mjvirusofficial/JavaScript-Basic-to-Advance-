import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import Employee from './Employee'

export const EmployeeContext = createContext()
function Hr() {

  const [EmployeeData] = useState({
    Name:"Jenny",
    Salary:"50LPA"
  })  
  return (
    <div>
        <h1>Hii, I am the Boss❤️</h1>
        <EmployeeContext.Provider value={EmployeeData}>
          <Employee/>
        </EmployeeContext.Provider>
    </div>
  )
}

export default Hr;