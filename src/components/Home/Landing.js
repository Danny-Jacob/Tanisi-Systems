import React, { useState } from "react";
import "../../assets/styles/landing.css";
import video from "../../assets/videos/landing.mp4";

import Component_2 from "./Component_2";
import Component_3 from "./Component_3";
// import LogoRotatorContainer from "./Logo";
import Logo from "./Logo";
import Testimonial from "./Testimonial";
import Component_4 from "./Component_4";
import Footer from "./Footer";
import Navbar from "../Navbar";
import Solution from "../Solutions/Solution";

const Landing = () => {
  
  return (
    <>
      <div className="video-background">
       <Navbar/>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-content">
          <p>
            Your IT application solutions
            <br />
            and service partners
            <br />
          </p>
        </div>
      </div>
      <Component_2/>
      <Component_3/>
      <Logo/>
      {/* <Testimonial/> */}
      <Component_4></Component_4>
      <Footer/>
    </>
  );
};

export default Landing;