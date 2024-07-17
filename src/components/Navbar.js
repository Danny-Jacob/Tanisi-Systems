import React, { useState } from "react";
import logo from "../assets/images/Layer_1.svg";
import back from "../assets/images/back.svg";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useNavigate } from 'react-router-dom';
import hamburger from "../assets/images/hamburger.svg";
import "../assets/styles/navbar.css";
const Navbar = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const navigate = useNavigate();
  const handleClick_1 = () => {
    setIsOverlayVisible(false);
    navigate('/'); // Navigate to a new route
  };
  const handleClick_2 = () => {
    setIsOverlayVisible(false);
    navigate('/solutions'); // Navigate to a new route
  };
  const handleClick_3 = () => {
    setIsOverlayVisible(false);
    navigate('/careers'); // Navigate to a new route
  }; const handleClick_4 = () => {
    setIsOverlayVisible(false);
    navigate('/contact  '); // Navigate to a new route
  };
  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };
  return (
    <>
      {isOverlayVisible && (
        <div className="fullscreen-overlay">
          <div className="over-flex">
            <img src={logo} className="nav-logo"></img>
            <img src={back} onClick={toggleOverlay}></img>
          </div>
          <div className="nav-items">
            {/* <Link to='/' className="nav-item-cs">HOME</Link>
            <Link to='/solutions' className="nav-item-cs">SOLUTIONS</Link>
            <Link to='/careers' className="nav-item-cs">CAREERS</Link>
            <Link to='/contact' className="nav-item-cs">CONTACT</Link> */}
            <div  className="nav-item-cs" onClick={handleClick_1}>HOME</div>
            <div  className="nav-item-cs" onClick={handleClick_2}>SOLUTIONS</div>
            <div  className="nav-item-cs" onClick={handleClick_3}>CAREERS</div>
            <div  className="nav-item-cs" onClick={handleClick_4}>CONTACT</div>
          </div>
        </div>
      )}
      <div className="navbar">
        <img src={logo}className="nav-logo"></img>
        <div className="nav-right-buttons">
          <button className="explore-button">Explore</button>
          <img src={hamburger} onClick={toggleOverlay} className="ham"></img>
        </div>
      </div>
    </>
  );
};

export default Navbar;
