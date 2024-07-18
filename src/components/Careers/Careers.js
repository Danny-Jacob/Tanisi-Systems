import React, { useState } from "react";
import Navbar from "../Navbar";
import main from "../../assets/images/car-main.svg";
import img3 from "../../assets/images/comp_3.svg";
import img4 from "../../assets/images/Group 265.svg";
import Footer from "../Home/Footer";
import "../../assets/styles/career.css";
import Logo from "../Home/Logo";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Careers = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    state: "",
    country: "",
    phoneNumber: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("state", formData.state);
    data.append("country", formData.country);
    data.append("phoneNumber", formData.phoneNumber);
    data.append("file", formData.file);

    try {
      const response = await axios.post("YOUR_API_ENDPOINT", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <Navbar />
      <div style={{height:"4rem"}}></div>
      <img src={main} style={{ width: "100%" }}className="image_3"></img>
      <img src={img3} style={{ width: "100%" }}className="image_3"></img>
      <div className="comp_2">
        <div className="comp_2_heading">Jobs Posts</div>
        <div className="comp_2_desc">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </div>
        <br></br>
        <br></br>
        <div className="job_box" onClick={()=>{navigate("/apply")}}>
          <div className="job_head">
            <div className="job_title">Software Engineer 2 </div>
            <div style={{ textDecoration: "underline" }}>Apply Now</div>
          </div>
          <hr></hr>
          <div className="job_body">
            <div>
              <div className="job_lable">Company</div>
              <div className="job_text">Microsoft</div>
            </div>
            <div>
              <div className="job_lable">Experience</div>
              <div className="job_text">5-7 yrs</div>
            </div>
            <div>
              <div className="job_lable">Location</div>
              <div className="job_text">
              Chandigarh, India
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={img3} style={{ width: "100%" }}className="image_3"></img>
      <img src={img4} style={{ width: "100%" }}className="image_3"></img>

      <div className="comp_2">
        <div className="comp_2_heading">
          Tanisi Systems Inc has an aggressive Employee Referral Policy.
        </div>
        <div className="comp_2_desc">
          If you know of someone who would like to join us, we will be glad to
          consider them for employment. You can get an Employee Referral Payment
          should your candidate be hired by Tanisi Technologies. for a full-time
          regular or 6+ month contract position within United States, and if
          that person satisfactorily completes the Introductory Period and their
          first three months at the project site, you will receive a $600 bonus
          for the referral.
        </div>
      </div>
      <img src={img3} style={{ width: "100%" }}className="image_3"></img>
      <div style={{ background: "black", color: "white" }} className="apply">
        <div className="apply-main">
        <span className="apply-head">Apply Online</span>
        <br></br>
        <br></br>
        <span className="apply-body">
          To apply, you may email us your resume as a Word or RTF attachment.
          Or, use the form below and fill in your contact information, and copy
          and paste your resume into the space provided below:
        </span>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <form onSubmit={handleSubmit}>
      <div className="apply-form-field">
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="apply-form-field">
        <label>
          State
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          />
        </label>
        <label>
          Country
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="apply-form-field">
        <label>
          Phone number
          <input
            type="number"
            name="phoneNumber"
            placeholder="Mobile"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Upload file
          <input
            type="file"
            name="file"
            accept="application/pdf"
            className="custom-choose"
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
        </div>
      </div>
      {/* <Logo/> */}
      {/* <img src={img3} style={{ width: "100%" }}></img> */}

      <Footer />
      {/* <div>Careers</div> */}
    </>
  );
};

export default Careers;
