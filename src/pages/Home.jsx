import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { Caraousal } from '../components/Caraousal/Caraousal';
import PropertyList from '../pages/PropertyList';
import { TestinomialCard } from '../components/TestinomialCard';
import { ServiceCard } from '../components/ServiceCard';
import { AboutCard } from '../components/AboutCard';
import { AgentCard } from '../components/AgentCard';
import { ServicesSection } from '../sections/Home/ServicesSection';
const Home = () => {
  return (
    <div>
        <Navbar/>
      <Caraousal/>           
      <PropertyList/>

      <ServicesSection
        title="Our Services"
        limit={4}
        showButton={true}
      />
            <TestinomialCard/>
      <AboutCard/>
      <AgentCard/>
      <Footer/>
      
    </div>
  )
}

export default Home
