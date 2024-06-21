import React from "react";
import "../../assets/styles/component_3.css";
import line from "../../assets/images/Vector 3.svg";
import img3 from "../../assets/images/comp_3.svg";
import img4 from "../../assets/images/image-group.svg";


const Component_3 = () => {
  return (<>
    <div className="component_3">
      <article>
        {/* <div class="category">REPTILES AND AVES</div> */}
        <div class="title">
          <div className="left-head">Tanisi Systems Inc</div>
          <div>
            Tanisi and its affiliates deliver the services through their
            multiple offices in United States . The goal has been to offer Top
            companies the comprehensive skill and knowledge set, intellectual
            rigor and proven methodologies of a Big Five firm, but with the
            focused client service and nimbleness of a boutique consultancy.
          </div>
        </div>
        <div className="right-flex">
          <div className="vertical"></div>
          <div className="right">
            <div className="right-items">
              Workforce Optimization
              <div style={{height:"1rem"}}></div>    
              <span class="centered-content">
                <img src={line} alt="Line Image" />
                Innovative Technologies
              </span>
              <span class="centered-content">
                <img src={line} alt="Line Image" />
                Increased Efficiencies Leading Edge Solutions
              </span>
              <span class="centered-content">
                <img src={line} alt="Line Image" />
                End-Goal
              </span>
              <span class="centered-content">
                <img src={line} alt="Line Image" />
                Client Excellence.
              </span>              
            </div>
            <div className="right-items">
              
              MSP
              <div style={{height:"1rem"}}></div>              
              <span class="centered-content">
                <img src={line} alt="Line Image" />
                From overall
              </span>
              <span class="centered-content">
                <img src={line} alt="Line Image" />
                Program Management
              </span>
              <span class="centered-content">
                <img src={line} alt="Line Image" />
                Cost Effective
              </span>
              <span class="centered-content">
                <img src={line} alt="Line Image" />
                Staffing Solution.
              </span>
              <span class="centered-content">
                <img src={line} alt="Line Image" />
                Into your Workforce.
              </span>               
            </div>
            <div className="right-items">
              
            Service Level Agreement
              <div style={{height:"1rem"}}></div>              
              <span class="centered-content">
                <img src={line} alt="Line Image" />
                Submittal Response Time
              </span>
              <span class="centered-content">
                <img src={line} alt="Line Image" />
                Retention/Project Completion
              </span>
              <span class="centered-content">
                <img src={line} alt="Line Image" />
                Orders Received
              </span>
              <span class="centered-content">
                <img src={line} alt="Line Image" />
                to Placement Ratios
              </span>
                            
            </div>
            <div className="right-items">
              
            Smart Solutions
              <div style={{height:"1rem"}}></div>              
              <span class="centered-content">
                <img src={line} alt="Line Image" />
                IOT Testing Labs
              </span>
              <span class="centered-content">
                <img src={line} alt="Line Image" />
                Streaming Analytics
              </span>
              <span class="centered-content">
                <img src={line} alt="Line Image" />
                Wearable Solutions
              </span>
              <span class="centered-content">
                <img src={line} alt="Line Image" />
                IOT Solutions
              </span>
                             
            </div>
            
          </div>
        </div>
      </article>
    </div>
    <div style={{height:"20rem"}}></div> 
    <img src={img3} className="image_3"></img>
    <img src={img4} className="image_3"></img>

    </>
  );
};

export default Component_3;
