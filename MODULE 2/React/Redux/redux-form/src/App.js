
// import React from 'react'
// import SubmitForm from './Component/SubmitForm'

// function App() {
//   return (
//     <div>
//         <SubmitForm/>
//     </div>
//   )
// }

// export default App



























import { useState } from 'react';
import './App.css';
import SubmitForm from './Component/SubmitForm';

function App() {
  const [name,setname] = useState()
  const handleSubmit = value =>{
    setname(value.name)  
  
  }
  return (
    <div className="App">
    <SubmitForm onSubmit = {handleSubmit} />
    <h1>{name}</h1>
    </div>
  );
}

export default App;
