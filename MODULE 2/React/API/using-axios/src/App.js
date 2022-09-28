import { Route, Routes } from 'react-router-dom';
import './App.css';
import Assignment from './Pages/Assignment';
import Home from './Pages/Home'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/assignment' element={<Assignment/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
