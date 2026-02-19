import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { Caraousal } from '../components/Caraousal/Caraousal';
import PropertyList from '../pages/PropertyList';
import { TestinomialCard } from '../components/TestinomialCard';
import { AboutCard } from '../components/AboutCard';
import { AgentCard } from '../components/AgentCard';
import { ServicesSection } from '../sections/Home/ServicesSection';
import TestimonialList from '../sections/Home/TestimonialList ';
import AgentList from '../sections/Home/AgentList';
import AboutSection from '../sections/Home/AboutSection';
import { HireAgentSection } from '../sections/Home/HireAgentSection';
import { CounterProperty } from '../sections/Home/CounterProperty';
const Home = () => {
  return (
    <div>
      <Caraousal/>           
      <PropertyList/>
      <ServicesSection
        title="Our Services"
        limit={4}
        showButton={true}
      />
      <TestimonialList/>
      <AboutSection aboutId={1}/>
      <CounterProperty/>
      <HireAgentSection/>
      <AgentList title={"Our Agents"} />      
    </div>
  )
}

export default Home
