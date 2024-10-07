import React, { useState } from 'react'
import Navbar from '../Navbar'
import ban1 from "../../assets/images/Apply Online.jpg";
import img3 from "../../assets/images/comp_3.svg";
import Footer from '../Home/Footer';
import "../../assets/styles/career.css";

const ApplyOnline = () => {
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    
    experience: "",
    state: "",
    country: "",
    mobile: "",
    job_applied: "",
    jobId: "6CkW45z62WqxCxEQkbrEvu",
    resume: null,
  });
  // old
  // const handleChange = (e) => {
  //   const { name, value, type, files } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: type === "file" ? files[0] : value,
  //   });
  // };
  const handleChange = (e) => {
    const { name, type, files } = e.target;
  
    if (type === "file") {
      const file = files[0];
      
      if (file && file.size < 3 * 1024 * 1024) { // 3 MB in bytes
        setError("File must be at least 3 MB.");
        return; // Stop further processing
      } else {
        setError(""); // Clear error if valid
      }
  
      setFormData({
        ...formData,
        [name]: file,
      });
    } else {
      setFormData({
        ...formData,
        [name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch("http://localhost:5000/applyJob", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        // Handle success (e.g., show a message or redirect)
      } else {
        console.error("Form submission failed");
        // Handle error
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div><Navbar/>
    <div style={{height:"4rem"}}></div>
    <img src={ban1} className="image_3"></img>
    <img src={img3} style={{ width: "100%" }} className="image_3"></img>
      <div style={{ background: "black", color: "white" }} className="apply">
        <div className="apply-main">
          <span className="apply-head">Apply Online</span>
          <br></br>
          <br></br>
          <span className="apply-body">
            To apply, you may email us your resume as a Word or RTF attachment.
            Or, use the form below and fill in your contact information, and
            copy and paste your resume into the space provided below:
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div className="apply-form-field">
              <label>
                Full Name
                <input
                  type="text"
                  name="fullname"
                  placeholder="Name"
                  onChange={handleChange}
                />
              </label>
              <label>
                Email
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="apply-form-field">
            <label>
                Job Role
                <input
                  type="text"
                  name="job_applied"
                  placeholder="Job Role"
                  onChange={handleChange}
                />
              </label>
              {/* <label>
                Gender
                <input
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  onChange={handleChange}
                />
              </label> */}
              <label>
                Experience
                <input
                  type="number"
                  name="experience"
                  placeholder="Experience"
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
                  onChange={handleChange}
                />
              </label>
              <label>
                Country
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="apply-form-field" style={{width:"50%"}}>
              <label>
                Phone number <span style={{fontSize:"x-small"}}>(include country code)</span>
                <input
                  type="number"
                  name="mobile"
                  placeholder="Mobile"
                  onChange={handleChange}
                />
              </label>

              {/* <label>
                Job Role
                <input
                  type="text"
                  name="job_applied"
                  placeholder="Job Role"
                  onChange={handleChange}
                />
              </label> */}
            </div>
            <div className="apply-form-field">
            <label>
  Upload file<span style={{fontSize:"x-small"}}> &nbsp;(maximum file size: 3mb)</span>
  <input
    type="file"
    name="resume"
    accept="application/pdf"
    onChange={handleChange}
    className="custom-choose"
  />
</label>
{error && <span className="error-message">{error}</span>}
              <button type="submit" className="submit-form-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <img src={img3} style={{ width: "100%" }} className="image_3"></img>

    <Footer/></div>
  )
}

export default ApplyOnline