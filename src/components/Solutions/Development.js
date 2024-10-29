import React from "react";
import Footer from "../Home/Footer";
import ban1 from "../../assets/images/Development.jpg";
import Navbar from "../Navbar";
import img3 from "../../assets/images/comp_3.svg";

const Development = () => {
  return (
    <div>
      <Navbar />
      <div style={{ height: "4rem" }}></div>
      <img loading="lazy" src={ban1} className="image_3"></img>
      <div className="comp_2">
        <div className="comp_2_heading">Development Process</div>
        <div className="comp_2_desc">
          We utilize industry best practices and Agile methodologies from the
          initial stages of the Software Development Life Cycle (SDLC) to ensure
          high-quality software delivery. Our process defines the necessary
          roles, responsibilities, and artifacts for success. Our consultants
          are experts in testing solutions across sectors such as Healthcare,
          Insurance, Pharmaceutical, Retail, Telecom, and Financial Services.
          They specialize in modern technologies including web applications,
          cloud-native platforms, microservices, AI/ML integration, and advanced
          ERP systems.
        </div>
        <div style={{ height: "4rem" }}></div>

        <div className="table-container">
          <table className="responsive-table">
            <thead>
              <tr>
                <th>Requirements</th>
                <th>Design & Analysis</th>
                <th>Development</th>
                <th>Testing</th>
                <th>Deployment</th>
                <th>Support</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identify Requirements</td>
                <td>Evaluate Use-Cases</td>
                <td>Create Test Plans and Scripts</td>
                <td>Execute Manual Testing (Functional/System/UAT)</td>
                <td>Verify Post-Production</td>
                <td>Ongoing Support</td>
              </tr>
              <tr>
                <td>Requirements Analysis</td>
                <td>Perform Gap Analysis</td>
                <td>Develop Test Plan and Strategy</td>
                <td>Automate Testing (Regression)</td>
                <td>Create User Guides</td>
                <td>Handle Change Requests</td>
              </tr>
              <tr>
                <td>Define Testing Scope</td>
                <td>Formulate Testing Strategy</td>
                <td>Setup Testing Environment</td>
                <td>Log and Track Issues</td>
                <td>Prepare Documentation</td>
                <td>Manage Maintenance Requests</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ height: "4rem" }}></div>
      <img loading="lazy" src={img3} style={{ width: "100%" }} className="image_3"></img>
      <div className="comp_2_dev" >
        <div className="comp_2_heading">Java Development</div>
        <div className="comp_2_desc_dev">
          Tanisi Systems has a proven track record in delivering Java-based
          applications using modern frameworks and technologies like Spring
          Boot, Microservices, and Reactive Programming. We specialize in
          building scalable and secure solutions, offering end-to-end
          development and maintenance services tailored to meet the unique needs
          of our clients.
        </div>
      </div>
      <div className="comp_2_dev" >
        <div className="comp_2_heading">Web and Mobile Development</div>
        <div className="comp_2_desc_dev">
          Our team excels in building responsive and dynamic web applications
          using the latest front-end technologies like React, Angular, and
          Vue.js. We also develop cross-platform mobile applications with
          frameworks such as Flutter and React Native, ensuring seamless user
          experiences across devices.
        </div>
      </div>
      <div className="comp_2_dev" >
        <div className="comp_2_heading">Cloud Solutions</div>
        <div className="comp_2_desc_dev">
          We offer comprehensive cloud services that drive digital
          transformation through strategic planning and cloud-readiness
          assessments. Our expertise spans multi-cloud and hybrid cloud
          environments, enabling secure, scalable, and cost-effective solutions.
          Our cloud-native development and DevOps practices ensure rapid
          deployment and continuous integration for improved operational
          efficiency.
        </div>
      </div>
      <div className="comp_2_dev" >
        <div className="comp_2_heading">
          Artificial Intelligence and Machine Learning
        </div>
        <div className="comp_2_desc_dev">
          We leverage AI and ML technologies to develop intelligent solutions
          that enhance decision-making and automate processes. Our services
          include predictive analytics, natural language processing, computer
          vision, and AI-driven chatbot development, helping organizations
          unlock new business opportunities and optimize operations.
        </div>
      </div>
      <div className="comp_2_dev" >
        <div className="comp_2_heading">Internet of Things (IoT)</div>
        <div className="comp_2_desc_dev">
          Our IoT solutions enable businesses to connect, monitor, and control
          devices, generating actionable insights from real-time data. We
          specialize in developing secure IoT ecosystems using advanced
          protocols and cloud integration, supporting applications in smart
          manufacturing, healthcare, and smart cities.
        </div>
      </div>
      <div className="comp_2_dev" >
        <div className="comp_2_heading">Blockchain</div>
        <div className="comp_2_desc_dev">
          We provide blockchain consulting and development services for
          industries looking to enhance transparency and security in their
          operations. Our expertise includes building decentralized applications
          (dApps) and smart contracts, and implementing blockchain solutions for
          supply chain management, finance, and digital identity verification.
        </div>
      </div>
      <div className="comp_2_dev" >
        <div className="comp_2_heading">SAP Services</div>
        <div className="comp_2_desc_dev">
          Tanisi Systems is a global provider of Enterprise Business solutions,
          offering SAP implementation, management, and support services. We help
          organizations in various sectors, such as Aerospace, Oil & Gas,
          Healthcare, and Manufacturing, leverage SAP solutions to drive
          efficiency and innovation.
        </div>
      </div>
      <div className="comp_2_dev" >
        <div className="comp_2_heading">Support Services</div>
        <div className="comp_2_desc_dev">
          We deliver comprehensive product support through dedicated Level 2 and
          Level 3 teams, handling complex issues and ensuring seamless customer
          experiences. Our support services are designed to maximize uptime and
          enhance the overall product lifecycle, enabling clients to focus on
          core business operations.<br/><br/>
          <div style={{color:"#c32f49"}}>
        We also offer a wide range of additional technology services and solutions
      tailored to meet the evolving needs of our clients across diverse
      industries.
        </div>
        </div>
        
      </div>
     
      <div style={{ height: "4rem" }}></div>
      <Footer />
    </div>
  );
};

export default Development;
