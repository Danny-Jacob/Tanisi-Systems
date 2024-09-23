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
                .NET Technologies - C#, ASP.NET, VB.NETs
              </span>
              <span class="centered-content1">
                <img src={line} alt="Line Image" />
                SharePoint Server
              </span>
              <span class="centered-content1">
                <img src={line} alt="Line Image" />
                Network Security
              </span>
              <span class="centered-content1">
                <img src={line} alt="Line Image" />
                IPhone, Android & Mobile App
              </span>
              <span class="centered-content1">
                <img src={line} alt="Line Image" />
                Enterprise Applications
              </span><span class="centered-content1">
                <img src={line} alt="Line Image" />
                Flex, Silverlight & AjaxJAVA & J2EE
              </span><span class="centered-content1">
                <img src={line} alt="Line Image" />
                SOA & SaaS
              </span><span class="centered-content1">
                <img src={line} alt="Line Image" />
                Big Data
              </span>              
            </div>
            <div style={{height:"1rem"}}></div>  
      </div>
      
    </div>
  );
};

export default Skill;
