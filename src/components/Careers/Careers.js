import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import main from "../../assets/images/Image05.jpg";
import img3 from "../../assets/images/comp_3.svg";
import img4 from "../../assets/images/Image06.jpg";
import Footer from "../Home/Footer";
import "../../assets/styles/career.css";
import Logo from "../Home/Logo";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Careers = () => {
  const navigate = useNavigate();
  // apply job
  // const [formData, setFormData] = useState({
  //   fullname: "",
  //   email: "",
  //   gender: "",
  //   experience: "",
  //   state: "",
  //   country: "",
  //   mobile: "",
  //   job_applied: "",
  //   jobId: "6CkW45z62WqxCxEQkbrEvu",
  //   resume: null,
  // });

  // const handleChange = (e) => {
  //   const { name, value, type, files } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: type === "file" ? files[0] : value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const data = new FormData();
  //   for (const key in formData) {
  //     data.append(key, formData[key]);
  //   }

  //   try {
  //     const response = await fetch("https://tanisiinc.com/api/applyJob", {
  //       method: "POST",
  //       body: data,
  //     });

  //     if (response.ok) {
  //       console.log("Form submitted successfully");
  //       // Handle success (e.g., show a message or redirect)
  //     } else {
  //       console.error("Form submission failed");
  //       // Handle error
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  // getalljobs
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("https://tanisiinc.com/api/jobs");
        setJobs(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ height: "4rem" }}></div>
      <img loading="lazy" src={main} style={{ width: "100%" }} className="image_3"></img>
      <img loading="lazy" src={img3} style={{ width: "100%" }} className="image_3"></img>
      <div className="comp_2">
        <div className="comp_2_heading">Jobs Posts</div>
        <div className="comp_2_desc">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </div>
        <br></br>
        <br></br>
        {jobs.map(
          (job) =>
            job.jobId !== "6CkW45z62WqxCxEQkbrEvu" && (
              <div
                key={job.id}
                className="job_box"
                onClick={() => navigate(`/apply/${job.jobId}`)}
              >
                <div className="job_head">
                  <div className="job_title">{job.jobTitle}</div>
                  <div style={{ textDecoration: "underline" }}>Apply Now</div>
                </div>
                <hr />
                <div className="job_body">
                  <div>
                    <div className="job_lable">Company</div>
                    <div className="job_text">{job.company}</div>
                  </div>
                  <div>
                    <div className="job_lable">Experience</div>
                    <div className="job_text">{job.experience} yrs</div>
                  </div>
                  <div>
                    <div className="job_lable">Location</div>
                    <div className="job_text">{job.location}</div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      <img loading="lazy" src={img3} style={{ width: "100%" }} className="image_3"></img>
      {/* <img loading="lazy" src={img4} style={{ width: "100%" }} className="image_3"></img> */}
      {/* <div className="image-container">
      <img loading="lazy" src={img4} alt="Your Image" className="background-image" />
      <div className="centered-text">
        <p>Referral Policy</p>
      </div>
    </div>
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
      </div> */}
      {/* <div style={{height:"8rem"}}></div> */}
      {/* <img loading="lazy" src={img3} style={{ width: "100%" }} className="image_3"></img>
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
                Gender
                <input
                  type="text"
                  name="gender"
                  placeholder="Gender"
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
            <div className="apply-form-field">
              <label>
                Phone number
                <input
                  type="number"
                  name="mobile"
                  placeholder="Mobile"
                  onChange={handleChange}
                />
              </label>

              <label>
                Job Role
                <input
                  type="text"
                  name="job_applied"
                  placeholder="Job Role"
                  onChange={handleChange}
                />
              </label>
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
      </div> */}
      {/* <Logo/> */}
      {/* <img loading="lazy" src={img3} style={{ width: "100%" }}></img> */}

      <Footer />
      {/* <div>Careers</div> */}
    </>
  );
};

export default Careers;
