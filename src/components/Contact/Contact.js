import React from "react";
import Navbar from "../Navbar";
import main from "../../assets/images/Mask group (6).svg";
import img3 from "../../assets/images/comp_3.svg";
import Footer from "../Home/Footer";
import Logo from "../Home/Logo";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div style={{height:"4rem"}}></div>

      <img src={main} style={{ width: "100%" }}className="image_3"></img>
      <img src={img3} style={{ width: "100%" }}className="image_3"></img>
      <div style={{ background: "black", color: "white" }} className="apply">
        <div className="apply-main">
          <span className="apply-head">Contact Us</span>
          <br></br>
          <br></br>
          <span className="apply-body">
            Need to get in touch with us? Fill out the form with your inquiry or
            send a mail directly to us at info@tanisiinc.com
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="apply-form-field">
            <label>
              First Name
              <input type="text" placeholder="Enter here"></input>
            </label>
            <label>
              Last Name
              <input type="text" placeholder="Enter here"></input>
            </label>
          </div>
          <div className="apply-form-field">
            <label>
              Phone number<input type="Number" placeholder="Enter here"></input>
            </label>
            <label>
              Email
              <input type="text" placeholder="Enter here"></input>
            </label>
          </div>
          <label>
            Message
            <textarea
              className="apply-textarea"
              placeholder="Enter here"
            ></textarea>
          </label>
        </div>
      </div>
      <Logo />
      <Footer />
    </>
  );
};

export default Contact;
