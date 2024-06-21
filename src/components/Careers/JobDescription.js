import React from "react";
import Navbar from "../Navbar";
import img3 from "../../assets/images/comp_3.svg";
import Footer from "../Home/Footer";

const JobDescription = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2rem 6rem",
          alignItems: "center",
        }}
      >
        <div style={{ display: "grid" }}>
          <div style={{ fontSize: "35px" }}>Software Engineer 2 </div>
          <div style={{ display: "flex", color: "#888888" }}>
            <div>Microsoft | &nbsp;</div>
            <div>5-7 yrs | &nbsp;</div>
            <div>Chandigarh, India</div>
          </div>
        </div>

        {/* <button
          style={{
            padding: "1rem",
            border: "none",
            background: "#c32f49",
            color: "white",
            borderRadius: "10px",
          }}
          onclick="location.href='#section2'"
        >
          Apply
        </button> */}
      </div>
      <div style={{ padding: "0rem 6rem 5rem 6rem", textAlign: "justify" }}>
        <p>
          {" "}
          Microsoft Silicon and Cloud Hardware Infrastructure Engineering
          (SCHIE) is the team behind Microsoft’s expanding Cloud Infrastructure
          and responsible for powering Microsoft’s “Intelligent Cloud” mission.
          SCHIE delivers the core infrastructure and foundational technologies
          for Microsoft's over 200 online businesses including AI, Bing, MSN,
          Office 365, Xbox Live, Skype, OneDrive and the Microsoft Azure
          platform globally with our server and data center infrastructure,
          security and compliance, operations, globalization, and manageability
          solutions.
        </p>
        <p>
          In partnership with the Azure Service teams, we are on a mission to
          deliver the hardware, software, services, and infrastructure roadmap
          that enables users to run technical computing workloads on Azure. Our
          focus is on smart growth, high efficiency, and delivering a trusted
          experience to customers and partners worldwide  The SCHIE HW
          Diagnostic Engineering team plays a critical role in designing and
          developing diagnostic software solutions for Server and Rack
          Infrastructure components that are deployed for Microsoft's online
          services.{" "}
        </p>
        We work closely with Microsoft product groups, industry partners and
        researchers to architect and develop server diagnostics solutions to
        support diagnostics and servicing of the hardware that supports our
        cloud services platforms. We are looking for a highly motivated,
        self-driven Software Engineer with a good understanding of Server and
        Infrastructure Hardware components that are deployed in the Cloud Data
        Centers and their Diagnostics using Linux Technologies and Open source
        standards.
        <p>
          Preferred Qualifications
          <li>
            Hands on experience in developing Diagnostic Code as well as skills
            to work in a laboratory environment is a plus.
          </li>
          <li>
            In-depth knowledge of hardware, software, and cloud technologies
          </li>
          <li>Experience with cloud-scale architecture and infrastructure </li>
        </p>
      </div>

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
          <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
            <label>
              Name
              <input type="text" placeholder="Name"></input>
            </label>
            <label>
              Email
              <input type="text" placeholder="Email"></input>
            </label>
          </div>
          <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
            <label>
              State<input type="text" placeholder="State"></input>
            </label>
            <label>
              Country<input type="text" placeholder="Country"></input>
            </label>
          </div>
          <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
            <label>
              Phone number<input type="Number" placeholder="Mobile"></input>
            </label>
            <label>
              Upload file
              <input
                type="file"
                accept="application/pdf"
                className="custom-choose"
              ></input>
            </label>
          </div>
        </div>
      </div>
      <img src={img3} style={{ width: "100%" }}></img>
      <Footer />
    </div>
  );
};

export default JobDescription;
