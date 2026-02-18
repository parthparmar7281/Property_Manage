import logo from './logo.svg';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PropertyCard from './components/PropertyCard';
import { Caraousal } from './components/Caraousal/Caraousal';
import PropertyList from './pages/PropertyList';
import { TestinomialCard } from './components/TestinomialCard';
import { ServiceCard } from './components/ServiceCard';
import { AboutCard } from './components/AboutCard';
import { AgentCard } from './components/AgentCard';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Caraousal/>           
      <PropertyList/>
      <ServiceCard/>
      <TestinomialCard/>
      <AboutCard/>
      <AgentCard/>
      <Footer/>
    </div>
  );
}

export default App;
