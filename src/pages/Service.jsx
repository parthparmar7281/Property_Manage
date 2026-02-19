import React from 'react'
import { ServicesSection } from '../sections/Home/ServicesSection'
import TestimonialList from '../sections/Home/TestimonialList '
import Breadcrumb from '../components/Breadcrumb'

const Service = () => {
  return (
    <div>
    <Breadcrumb
        title="Services"
        bgImage="images/hero_bg_1.jpg" 
      />
      <ServicesSection
        title="All Services"
      />    
      <TestimonialList/>
    </div>
  )
}

export default Service
