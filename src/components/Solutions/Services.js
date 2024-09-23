import React from 'react'
import ban1 from "../../assets/images/Services.jpg";
import "../../assets/styles/component_2.css";
import Component_3 from '../Home/Component_3';
import Navbar from '../Navbar';
import Footer from '../Home/Footer';

const Services = () => {
  return (
    <div><Navbar/>
    <div style={{height:"4rem"}}></div>
    <img src={ban1} className="image_3"></img>
    <Component_3/>
    <Footer/></div>
  )
}

export default Services