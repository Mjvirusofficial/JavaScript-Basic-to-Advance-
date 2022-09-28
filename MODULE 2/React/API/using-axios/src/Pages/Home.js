import React from 'react'
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Here, The AXIOS Assingment❤️</h1>
      <NavLink to='/assignment'><button className='click '>Click me</button></NavLink>
    </div>
  )
}

export default Home;