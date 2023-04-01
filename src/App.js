import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes , Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Subscription from './components/Subscription';
import Subs_form from './components/Subs_form';
import Success from './components/Success';
import Error from './components/Error';
import { useState } from 'react';
function App() {

  const [duration,setDuration] = useState('');

  return (
    <div className="text-gray-200">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/subscribe' element={<Subscription durFun={setDuration}/>}/>
        <Route path='/form' element={<Subs_form dur={duration} durFun={setDuration}/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/error' element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
