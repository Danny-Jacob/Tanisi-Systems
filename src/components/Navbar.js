// import React, { useEffect, useState } from "react";
// import logo from "../assets/images/Layer_1.svg";
// import back from "../assets/images/back.svg";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import { useNavigate } from 'react-router-dom';
// import hamburger from "../assets/images/hamburger.svg";
// import "../assets/styles/navbar.css";
// const Navbar = () => {
//   const [isOverlayVisible, setIsOverlayVisible] = useState(false);

//   const navigate = useNavigate();
//   const handleClick_1 = () => {
//     setIsOverlayVisible(false);
//     navigate('/'); // Navigate to a new route
//   };
//   const handleClick_2 = () => {
//     setIsOverlayVisible(false);
//     navigate('/solutions'); // Navigate to a new route
//   };
//   const handleClick_3 = () => {
//     setIsOverlayVisible(false);
//     navigate('/careers'); // Navigate to a new route
//   }; const handleClick_4 = () => {
//     setIsOverlayVisible(false);
//     navigate('/contact  '); // Navigate to a new route
//   };
//   const toggleOverlay = () => {
//     setIsOverlayVisible(!isOverlayVisible);
//   };
//   // const [navbarStyle, setNavbarStyle] = useState({
//   //   backgroundColor: "transparent",
//   //   boxShadow: "none",
//   // });

//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     // Check if the scroll position is more than 100vh
//   //     if (window.scrollY > window.innerHeight) {
//   //       setNavbarStyle({
//   //         backgroundColor: "white",
//   //         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//   //       });
//   //     } else {
//   //       setNavbarStyle({
//   //         backgroundColor: "transparent",
//   //         boxShadow: "none",
//   //       });
//   //     }
//   //   };

//   //   window.addEventListener("scroll", handleScroll);

//   //   // Cleanup the event listener on component unmount
//   //   return () => {
//   //     window.removeEventListener("scroll", handleScroll);
//   //   };
//   // }, []);
//   return (
//     <>
//       {isOverlayVisible && (
//         <div className="fullscreen-overlay">
//           <div className="over-flex">
//             <img loading="lazy" src={logo} className="nav-logo"></img>
//             <img loading="lazy" src={back} onClick={toggleOverlay}></img>
//           </div>
//           <div className="nav-items">
//             {/* <Link to='/' className="nav-item-cs">HOME</Link>
//             <Link to='/solutions' className="nav-item-cs">SOLUTIONS</Link>
//             <Link to='/careers' className="nav-item-cs">CAREERS</Link>
//             <Link to='/contact' className="nav-item-cs">CONTACT</Link> */}
//             <div  className="nav-item-cs" onClick={handleClick_1}>Home</div>
//             <div  className="nav-item-cs" onClick={handleClick_2}>Solutions</div>
//             <div  className="nav-item-cs" onClick={handleClick_3}>Careers</div>
//             <div  className="nav-item-cs" onClick={handleClick_4}>Contact</div>
//           </div>
//         </div>
//       )}
//       {/* <div className="navbar" style={{
//         ...navbarStyle,
//         transition: "background-color 0.3s ease, box-shadow 0.3s ease",
//       }}> */}
//        <div className="navbar">
//         <img loading="lazy" src={logo}className="nav-logo"></img>
//         <div className="nav-right-buttons">
//           <button className="explore-button">Explore</button>
//           <img loading="lazy" src={hamburger} onClick={toggleOverlay} className="ham"></img>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import logo from "../assets/images/Layer_1.svg";
import back from "../assets/images/back.svg";
import { useNavigate } from "react-router-dom";
import hamburger from "../assets/images/hamburger.svg";
import "../assets/styles/navbar.css";

const Navbar = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [showSolutionsMenu, setShowSolutionsMenu] = useState(false); // State to show/hide additional menu items under Solutions
  const [showCareersMenu, setShowCareersMenu] = useState(false); // State to show/hide additional menu items under Careers
  const [activeMenu, setActiveMenu] = useState(""); // State to track active menu item

  const navigate = useNavigate();

  const handleClick_1 = () => {
    setShowSolutionsMenu(false);
    setShowCareersMenu(false);
    setActiveMenu("");
    setIsOverlayVisible(false);
    navigate("/");
  };

  const handleClick_2 = () => {
    setShowSolutionsMenu(!showSolutionsMenu);
    setShowCareersMenu(false); // Close Careers menu if open
    setActiveMenu(showSolutionsMenu ? "" : "solutions"); // Toggle active menu
  };

  const handleClick_3 = () => {
    setShowCareersMenu(!showCareersMenu);
    setShowSolutionsMenu(false); // Close Solutions menu if open
    setActiveMenu(showCareersMenu ? "" : "careers"); // Toggle active menu
  };

  const handleClick_4 = () => {
    setShowSolutionsMenu(false);
    setShowCareersMenu(false);
    setActiveMenu("");
    setIsOverlayVisible(false);
    navigate("/contact");
  };

  // Functions for the additional menu items under "Solutions"
  const handleClick_Staffing = () => {
    setIsOverlayVisible(false);
    setActiveMenu("");
    navigate("/solutions");
  };

  const handleClick_Development = () => {
    setIsOverlayVisible(false);
    setActiveMenu("");
    navigate("/development");
  };

  const handleClick_Services = () => {
    setIsOverlayVisible(false);
    setActiveMenu("");
    navigate("/services");
  };
  const handleClick_Products = () => {
    setIsOverlayVisible(false);
    setActiveMenu("");
    navigate("/products");
  };

  // const handleClick_Scope = () => {
  //   setIsOverlayVisible(false);
  //   setActiveMenu("");
  //   navigate('/scope');
  // };

  // Functions for the additional menu items under "Careers"
  const handleClick_ApplyOnline = () => {
    setIsOverlayVisible(false);
    setActiveMenu("");
    navigate("/apply-online");
  };

  const handleClick_SearchJobs = () => {
    setIsOverlayVisible(false);
    setActiveMenu("");
    navigate("/careers");
  };

  const handleClick_ReferralPolicy = () => {
    setIsOverlayVisible(false);
    setActiveMenu("");
    navigate("/referral-program");
  };

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
    setShowSolutionsMenu(false); // Reset solutions menu when overlay is toggled
    setShowCareersMenu(false); // Reset careers menu when overlay is toggled
    setActiveMenu("");
  };

  return (
    <>
      {isOverlayVisible && (
        <div className="fullscreen-overlay">
          <div className="over-flex">
            <img loading="lazy" src={logo} className="nav-logo" alt="Logo" />
            <img loading="lazy" src={back} onClick={toggleOverlay} alt="Back" />
          </div>
          <div className="nav-items">
            <div className="nav-item-cs" onClick={handleClick_1}>
              Home
            </div>
            <div
              className={`nav-item-cs ${
                activeMenu === "solutions" ? "active" : ""
              }`}
              onClick={handleClick_2}
              style={{
                textDecoration:
                  activeMenu === "solutions" ? "underline" : "none",
                color: activeMenu === "solutions" ? "#c32f49" : "inherit",
              }}
            >
              Solutions
            </div>
            {showSolutionsMenu && (
              <div className="solutions-sub-menu">
                <div
                  className="nav-subitem-cs"
                  onClick={handleClick_Development}
                >
                  Development
                </div>
                <div className="nav-subitem-cs" onClick={handleClick_Products}>
                  Products
                </div>
                <div className="nav-subitem-cs" onClick={handleClick_Services}>
                  Services
                </div>
                <div className="nav-subitem-cs" onClick={handleClick_Staffing}>
                  Staffing Area
                </div>

                {/* <div className="nav-subitem-cs" onClick={handleClick_Scope}>Scope</div> */}
              </div>
            )}
            <div
              className={`nav-item-cs ${
                activeMenu === "careers" ? "active" : ""
              }`}
              onClick={handleClick_3}
              style={{
                textDecoration: activeMenu === "careers" ? "underline" : "none",
                color: activeMenu === "careers" ? "#c32f49" : "inherit",
              }}
            >
              Careers
            </div>
            {showCareersMenu && (
              <div className="careers-sub-menu">
                <div
                  className="nav-subitem-cs"
                  onClick={handleClick_ApplyOnline}
                >
                  Apply Online
                </div>
                <div
                  className="nav-subitem-cs"
                  onClick={handleClick_SearchJobs}
                >
                  Search Jobs
                </div>
                <div
                  className="nav-subitem-cs"
                  onClick={handleClick_ReferralPolicy}
                >
                  Referral Policy
                </div>
              </div>
            )}
            <div className="nav-item-cs" onClick={handleClick_4}>
              Contact
            </div>
          </div>
        </div>
      )}

      <div className="navbar">
        <img loading="lazy" src={logo} className="nav-logo" alt="Logo" />
        <div className="nav-right-buttons">
          <button
            className="explore-button"
            onClick={() => {
              navigate("/services");
            }}
          >
            Explore
          </button>
          <img
            src={hamburger}
            onClick={toggleOverlay}
            className="ham"
            alt="Menu"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
