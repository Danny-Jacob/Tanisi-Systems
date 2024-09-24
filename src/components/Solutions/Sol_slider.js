import React, { useState, useEffect } from "react";
import "../../assets/styles/logo.css"; // Import CSS file for styling
import client1 from "../../assets/images/Step 01.jpg";
import client2 from "../../assets/images/Step 02.jpg";
import client3 from "../../assets/images/Step 03.jpg";
import client4 from "../../assets/images/Step 04.jpg";
import client6 from "../../assets/images/Step 05.jpg";
import client8 from "../../assets/images/Step 06.jpg";
import img3 from "../../assets/images/comp_3.svg";
import img4 from "../../assets/images/Image04.jpg";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const Sol_slider = () => {
  const images = [
    client1,
    client2,
    client3,
    client4,
    client6,
    client8,

    // Add more image URLs as needed
  ];

  const handleDragStart = (e) => e.preventDefault(); // Prevent drag image

  return (
    <>
      <img src={img3} className="image_3"></img>
      {/* <img src={img4} className="image_3"></img> */}
      <div className="image-container">
      <img src={img4} alt="Your Image" className="background-image" />
      <div className="centered-text">
        <p>Staffing Approach and Scope</p>
      </div>
    </div>
      <div className="com-logo1">
       
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
                className="sliderimg1"
                alt={`slide ${index}`}
              />
            ))}
          />
        </div>
      </div>
    </>
  );
};

export default Sol_slider;
