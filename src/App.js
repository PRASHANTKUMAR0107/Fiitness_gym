import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes , Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Subscription from './components/Subscription';
import Subs_form from './components/Subs_form';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
function App() {
  let location=useLocation();
  return (
    <div className="text-gray-200">
      <Navbar/>
      <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/subscribe' element={<Subscription/>}/>
        <Route path='form' element={<Subs_form/>}/>
      </Routes>
      </AnimatePresence>
      <Footer/>
    </div>
  );
}

export default App;
