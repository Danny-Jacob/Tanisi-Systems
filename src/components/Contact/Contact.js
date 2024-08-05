import React, { useState } from "react";
import Navbar from "../Navbar";
import main from "../../assets/images/Mask group (6).svg";
import img3 from "../../assets/images/comp_3.svg";
import Footer from "../Home/Footer";
import Logo from "../Home/Logo";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    mobile: '',
    email: '',
    message: '',
  });

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = 'http://localhost:5000/addMessage';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('Response:', jsonResponse);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
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
          <form onSubmit={handleSubmit}>
          <div className="apply-form-field">
        <label>
          First Name
          <input
            type="text"
            name="firstname"
            placeholder="Enter here"
            value={formData.firstname}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastname"
            placeholder="Enter here"
            value={formData.lastname}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="apply-form-field">
        <label>
          Phone Number
          <input
          minLength={10}
            type="number"
            name="mobile"
            placeholder="Enter here"
            value={formData.mobile}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter here"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <label>
        Message
        <textarea
          name="message"
          className="apply-textarea"
          placeholder="Enter here"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
          <button type="submit" className="submit-form-button">Send Message</button>
    </form>
        </div>
      </div>
      <Logo />
      <Footer />
    </>
  );
};

export default Contact;
