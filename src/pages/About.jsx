import React from 'react'

import AboutSection from '../sections/Home/AboutSection'
import AgentList from '../sections/Home/AgentList'
import { CounterProperty } from '../sections/Home/CounterProperty'
import Breadcrumb from '../components/Breadcrumb'

export const About = () => {
  return (
    <div>
    <Breadcrumb
        title="About Us"
        bgImage="images/hero_bg_3.jpg" 
      />
    <div class="section">
      <div class="container">
        <div class="row text-left mb-5">
          <div class="col-12">
            <h2 class="font-weight-bold heading text-primary mb-4">About Us</h2>
          </div>
          <div class="col-lg-6">
              <p class="text-black-50">
              We specialize in professional property management services, helping
              property owners maximize value while ensuring tenants enjoy a smooth
              and comfortable living experience. Our team manages residential and
              commercial properties with transparency and efficiency.
            </p>

            <p class="text-black-50">
              From property marketing and tenant screening to rent collection and
              maintenance coordination, we handle every aspect of property management
              with attention to detail and industry expertise.
            </p>

            <p class="text-black-50">
              Our goal is to simplify property ownership by providing reliable
              management solutions that protect investments, reduce vacancies, and
              deliver consistent long-term returns.
            </p>
          </div>
          <div class="col-lg-6">
           <p class="text-black-50">
            With deep knowledge of the real estate market, we ensure properties are
            priced competitively and maintained to the highest standards, attracting
            quality tenants and increasing property value.
          </p>

          <p class="text-black-50">
            Whether you are a homeowner, investor, or tenant, our dedicated team
            provides personalized support, clear communication, and trusted
            property management services every step of the way.
          </p>
          </div>
        </div>
      </div>
    </div>
    
    <AboutSection showAll />
      <div class="section">
        <div class="container">
    <div class="row">
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="0">
            <img src="images/img_1.jpg" alt="Image" class="img-fluid" />
          </div>
          <div class="col-md-4 mt-lg-5" data-aos="fade-up" data-aos-delay="100">
            <img src="images/img_3.jpg" alt="Image" class="img-fluid" />
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <img src="images/img_2.jpg" alt="Image" class="img-fluid" />
          </div>
        </div>
        </div>
        </div>
        <CounterProperty/>

    <AgentList title={"The Team"} />
    </div>
  )
}
