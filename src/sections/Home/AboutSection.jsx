import React from "react";
import aboutFeatures from "../../static_resource/aboutFeatures";
import { AboutCard } from "../../components/AboutCard";

const AboutSection = ({aboutId = null, showAll = false}) => {

 const aboutData = showAll
    ? aboutFeatures
    : aboutFeatures.filter((item) => item.id === aboutId);
  return (
    <div className="section section-4 bg-light">
      <div className="container">

        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-5">
            <h2 className="font-weight-bold heading text-primary mb-4">
              Let's find home that's perfect for you
            </h2>
            <p className="text-black-50">
             Explore verified properties with expert support and trusted real estate solutions.
            </p>
          </div>
        </div>
             {aboutData.map((about,index) => (
                <AboutCard key={about.id} about={about} index={index}/>
            ))}    
        </div>
    </div>
  );
};

export default AboutSection;
