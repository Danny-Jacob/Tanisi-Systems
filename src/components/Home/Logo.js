import React, { useState, useEffect } from "react";
import "../../assets/styles/logo.css"; // Import CSS file for styling
import client1 from "../../assets/images/client1.svg";
import client2 from "../../assets/images/client2.svg";
import client3 from "../../assets/images/client3.svg";
import client4 from "../../assets/images/client4.svg";
import client6 from "../../assets/images/client6.svg";
import client8 from "../../assets/images/client8.svg";
import client9 from "../../assets/images/client9.svg";
import img3 from "../../assets/images/comp_3.svg";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Logo = () => {
  const images = [
    client1,
    client2,
    client3,
    client4,
    client6,
    client8,
    client9,
    // Add more image URLs as needed
  ];

  const handleDragStart = (e) => e.preventDefault(); // Prevent drag image

  return (<>   
    <div className="com-logo">
      <span className="head-logo-m">Our Clients</span>
      <div className="my-carousel">
        <AliceCarousel
          disableButtonsControls
          autoPlay
          controlsStrategy="none"
          autoPlayInterval={1000} // autoplay interval in milliseconds
          infinite
          autoPlayStrategy="default"
          mouseTracking
          animationDuration={3000}
          autoWidth
          paddingLeft={100}
          paddingRight={100}
          items={images.map((image, index) => (
            <img
              key={index}
              src={image}
              onDragStart={handleDragStart}
              className="sliderimg"
              alt={`slide ${index}`}
            />
          ))}
        />
      </div>
   </div>
   <img src={img3} className="image_3"></img>

   </>
  );
};

export default Logo;
