import logo from './logo.svg';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './components/Footer';
import PropertyCard from './components/PropertyCard';
import { Caraousal } from './components/Caraousal/Caraousal';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Caraousal/>           
      <PropertyCard/>
      <Footer/>
    </div>
  );
}

export default App;
