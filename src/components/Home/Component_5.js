import React from "react";
import img from "../../assets/images/Group 360.svg";
import img3 from "../../assets/images/comp_3.svg";
import img4 from "../../assets/images/Mask group.svg";
import img5 from "../../assets/images/Rectangle 259.svg";
import img6 from "../../assets/images/Rectangle 259 (1).svg";
import img7 from "../../assets/images/Rectangle 260.svg";
import img8 from "../../assets/images/Rectangle 260 (1).svg";

import "../../assets/styles/landing.css";

const Component_5 = () => {
  return (
    <div>
      <div  className="comp_5">
        <div  className="comp_5_flex1">
          <img loading="lazy" src={img}  className="comp_5_flex1_image"/>
        </div>
        <div  className="comp_5_flex2">
          <div className="unlock_heading">
            Unlock New Opportunities with Us!
          </div>
          <div className="unlock_body">
            <p>
              At Tanisi, we are dedicated to providing you with access to a wide
              range of fulfilling opportunities, whether in consulting,
              permanent positions, or gig work. Our agent-like relationship
              ensures that you receive continuous support and guidance every
              step of the way.
            </p>
            <p>
              If you’re already registered with us and utilizing our services,
              there’s no need for any action on your part. We have your profile
              on file, and you’ll continue to receive dedicated care from the
              same professional team that knows your needs.
            </p>
            <p>
              Curious to explore more? Visit our services page to discover how
              our innovative approach can propel your ambitions into uncharted
              territories.
            </p>
            When individuals with shared visions come together, amazing things
            happen. We’re excited to partner with you on your journey toward a
            brighter future.
          </div>
        </div>
      </div>
      <img loading="lazy" src={img3} className="image_3"></img>
      <img loading="lazy" src={img4} className="image_3"></img>
      <div className="comp_52">
        {/* <div className="force_pro">Our Promise:</div> */}
        <div className="force_head">
          A Force for Positive Change in the World of Work
        </div>
        <div className="force_des">
          At Tanisi, we are more than just a company; we are a catalyst for
          transformation in the workplace. Guided by our vision, mission, and
          values, we strive to connect organizations and individuals in ways
          that foster purpose and create meaningful opportunities for all.
        </div>
        <div className="grid_container">
          <div className="item">
            
             <img loading="lazy" src={img5} className="g_c_img" />
            <div className="item_header">Our Vision:</div>
            <div className="item_body">
              To redefine the work landscape by promoting collaboration,
              inclusivity, and growth.
            </div>
          </div>
          <div className="item">
           <img loading="lazy" src={img7} className="g_c_img"/>
            <div className="item_header">Our Mission:</div>
            <div className="item_body">
              To empower both organizations and individuals to realize their
              potential, promoting a culture of purpose-driven engagement.
            </div>
          </div>
          <div className="item">
           <img loading="lazy" src={img6}className="g_c_img" />
            <div className="item_header">Our Values:</div>
            <div className="item_body">
              Integrity, Innovation, Collaboration, and Empowerment. These
              principles shape our actions and decisions, ensuring we remain
              true to our commitment to making a positive impact.
            </div>
          </div>
          <div className="item">
           <img loading="lazy" src={img8}className="g_c_img" />
            <div className="item_header">Our Blueprint:</div>
            <div className="item_body">
              This is more than a set of guidelines; it’s our identity. It
              defines who we are and encapsulates our promise to our
              stakeholders. It outlines our unique processes that differentiate
              us in the market and reinforces our commitment to driving change.
            </div>
          </div>
        </div>
        <div className="item_header" style={{marginTop:"3rem",    textAlign: "center"
}}>
        Together, we can create an environment where work is fulfilling and impactful. Join us in our journey to make a difference.

        </div>
      </div>
    </div>
  );
};

export default Component_5;
