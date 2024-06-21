import React from "react";
import Navbar from "../Navbar";
import main from "../../assets/images/car-main.svg";
import img3 from "../../assets/images/comp_3.svg";
import img4 from "../../assets/images/Group 265.svg";
import Footer from "../Home/Footer";

import "../../assets/styles/career.css";
import Logo from "../Home/Logo";
import { useNavigate } from "react-router-dom";
const Careers = () => {
  const navigate=useNavigate();
  return (
    <>
      <Navbar />
      <img src={main} style={{ width: "100%" }}></img>
      <img src={img3} style={{ width: "100%" }}></img>
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
      <img src={img3} style={{ width: "100%" }}></img>
      <img src={img4} style={{ width: "100%" }}></img>

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
      <img src={img3} style={{ width: "100%" }}></img>
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
        <div style={{ display: "flex", gap: "2rem", marginBottom:"2rem" }}>
          <label>Name
          <input type="text" placeholder="Name"></input></label>
          <label>Email
          <input type="text" placeholder="Email"></input></label>
        </div>
        <div style={{ display: "flex", gap: "2rem",marginBottom:"2rem"}}>
        <label>State<input type="text" placeholder="State"></input></label>
        <label>Country<input type="text" placeholder="Country"></input></label>
        </div>
        <div style={{ display: "flex", gap: "2rem" ,marginBottom:"2rem"}}>
          <label>Phone number<input type="Number" placeholder="Mobile"></input></label>
          <label>Upload file
          <input type="file" accept="application/pdf" className="custom-choose"></input>
          </label>
        </div>
        </div>
      </div>
      <Logo/>
      {/* <img src={img3} style={{ width: "100%" }}></img> */}

      <Footer />
      {/* <div>Careers</div> */}
    </>
  );
};

export default Careers;
