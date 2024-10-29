import React from "react";
import ban1 from "../../assets/images/Image02.jpg";
import ban2 from "../../assets/images/Image03.jpg";
import img3 from "../../assets/images/comp_3.svg";
import "../../assets/styles/component_2.css";
import Grid from "./Grid";
import Sol_slider from "./Sol_slider";
import Skill from "./Skill";
import Footer from "../Home/Footer"
import Navbar from "../Navbar";

const Solution = () => {
  return (
    <div>
      <Navbar/>
      <div style={{height:"4rem"}}></div>
      <img loading="lazy" src={ban1} className="image_3"></img>
      <>
        <div className="comp_2">
          <div className="comp_2_heading">Staffing Areas</div>
          <div className="comp_2_desc">
            Tanisi Systems Inc is able to provide results custom to your needs
            and requirements. We understand that your goals will be unique and
            we are able to provide solutions that are specific to them. Our
            range of vertical markets has given us the experience needed to help
            you with your IT staffing requirements, whether it is contract
            staffing or direct hire. We know that every industry has different
            requirements and expectations when it comes to IT staffing and we
            are able to deliver on those needs.
          </div>
        </div>
        {/* <div style={{height:"2rem"}}></div> */}
        
      </>
      
      <Sol_slider/>
      <div style={{height:"4rem"}}></div>
      <img loading="lazy" src={img3} className="image_3"></img>
        <img loading="lazy" src={ban2} className="image_3"></img>
      <Grid/>
      <Skill/>
      <Footer/>
    </div>
  );
};

export default Solution;
