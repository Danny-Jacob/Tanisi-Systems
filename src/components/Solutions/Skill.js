import React from "react";
import "../../assets/styles/component_2.css";
import line from "../../assets/images/Vector 24.svg";

const Skill = () => {
  return (
    <div>
      <div className="comp_2">
        <div className="comp_2_heading">Staffing Technology Skills Sets</div>
        <div className="comp_2_desc">
          Technology is changing rapidly. It's difficult to stay ahead without
          proper experience in multiple technologies. Tanisi assesses your needs
          and skill sets to help you select the right technologies that are the
          right fit for your company.<br></br><br></br> Tanisi focuses its expertise on the
          following:
        </div>
        <div className="right-items">
              <div style={{height:"1rem"}}></div>    
              <span class="centered-content1">
                <img src={line} alt="Line Image" />
                .NET 6/7, Blazor
              </span>
              <span class="centered-content1">
                <img src={line} alt="Line Image" />
                SharePoint Online, Notion
              </span>
              <span class="centered-content1">
                <img src={line} alt="Line Image" />
                Zero Trust, Cloud Security
              </span>
              <span class="centered-content1">
                <img src={line} alt="Line Image" />
                React Native, Flutter, React, Angular
              </span>
              <span class="centered-content1">
                <img src={line} alt="Line Image" />
                Microservices, Kubernetes
              </span><span class="centered-content1">
                <img src={line} alt="Line Image" />
                Spring Boot, Micronaut
              </span><span class="centered-content1">
                <img src={line} alt="Line Image" />
                Serverless, GraphQL
              </span><span class="centered-content1">
                <img src={line} alt="Line Image" />
                TensorFlow, Spark
              </span>              
            </div>
            <div style={{height:"1rem"}}></div>  
      </div>
      
    </div>
  );
};

export default Skill;
