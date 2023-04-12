import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes , Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Subscription from './components/Subscription';
import { useState } from 'react';
import Gallery from './components/Gallery';
function App() {

  const [duration,setDuration] = useState('');

  return (
    <div className="text-gray-200">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/subscribe' element={<Subscription durFun={setDuration} dur={duration}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
