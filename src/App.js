import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './components/Footer';
import PropertyCard from './components/PropertyCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Footer/> */}
      {/* <PropertyCard/> */}
    </div>
  );
}

export default App;
