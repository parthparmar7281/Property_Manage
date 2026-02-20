
import { Route, Routes } from 'react-router-dom';
import Service from './pages/Service';
import Home from './pages/Home';
import { About } from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import { Contact } from './pages/Contact';
import PropertyDetail from './components/PropertyDetails/PropertyDetails';
import { Properties } from './pages/Properties';
function App() {
  return (
    <div className="App"> 
    <Navbar/>   
    <main>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </main>
    <Footer/>
    </div>
  );
}

export default App;
