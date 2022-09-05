import React, { useContext } from 'react'
import { EmployeeContext as Emp} from './Hr'
function Employee() {
    let context = useContext(Emp)
  return (
    <div>
      <h2>Her name is {context.Name}</h2>
      <h2>And Salary {context.Salary}</h2>

    </div>
  )
}

export default Employee