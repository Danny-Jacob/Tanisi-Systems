import React, { useEffect, useState } from "react";
import "../../assets/styles/landing.css";
import video from "../../assets/videos/landing.mp4";
import img3 from "../../assets/images/comp_3.svg";
import img4 from "../../assets/images/Image01.jpg";

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
  // const [navbarStyle, setNavbarStyle] = useState({
  //   backgroundColor: "transparent",
  //   boxShadow: "none",
  // });

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Check if the scroll position is more than 100vh
  //     if (window.scrollY > window.innerHeight) {
  //       setNavbarStyle({
  //         backgroundColor: "white",
  //         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  //       });
  //     } else {
  //       setNavbarStyle({
  //         backgroundColor: "transparent",
  //         boxShadow: "none",
  //       });
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      <div className="video-background">
     
       <Navbar/>
        {/* <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className="video-content" style={{color:"#BF2F4A"}}>
          <p style={{color:"#BF2F4A",fontWeight:""}}>
            Your IT application solutions
            <br />
            and service partners
            <br />
          </p>
        </div>
      </div>
      <Component_2/>
      <Component_3/>
      <img src={img3} className="image_3"></img>
   <img src={img4} className="image_3"></img>
      <Logo/>
      {/* <Testimonial/> */}

      <Component_4></Component_4>
      <Footer/>
    </>
  );
};

export default Landing;
