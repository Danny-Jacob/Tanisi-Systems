// import React, { useState } from "react";
import Navbar from "../Navbar";
import img3 from "../../assets/images/comp_3.svg";
import Footer from "../Home/Footer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/career.css";

const JobDescription = () => {
  const { jobId } = useParams();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/jobs?jobId=${jobId}`
        );
        setJobs(response.data.data);
        console.log(jobs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
   
    experience: "",
    state: "",
    country: "",
    mobile: "",
    job_applied: "",
    jobId: jobId,
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
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
    <div>
      <Navbar />
      {jobs.map((job) => (
        <div>
          <div className="top-jd"
          >
            <div style={{ display: "grid" }}>
              <div style={{ fontSize: "35px" }}>{job.jobTitle}</div>
              <div style={{ display: "flex", color: "#888888" }}>
                <div>{job.company} | &nbsp;</div>
                <div>{job.experience} yrs | &nbsp;</div>
                <div>{job.jobType} | &nbsp;</div>
                <div>{job.location}</div>
              </div>
            </div>
          </div>
          <div className='bottom-jd'>
            <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
          </div>
        </div>
      ))}
      <div
        id="section2"
        style={{ background: "black", color: "white" }}
        className="apply"
      >
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
                Job Role
                <input
                  type="text"
                  name="job_applied"
                  placeholder="Job Role"
                  onChange={handleChange}
                />
              </label>
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
                Phone number
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
                Upload file
                <input
                  type="file"
                  name="resume"
                  accept="application/pdf"
                  onChange={handleChange}
                  className="custom-choose"
                />
              </label>
              <button type="submit" className="submit-form-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <img src={img3} style={{ width: "100%" }}></img>
      <Footer />
    </div>
  );
};

export default JobDescription;
