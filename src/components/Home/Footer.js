import React from "react";
import foot from "../../assets/images/Layer_1.svg";
import s1 from "../../assets/images/Group 149.svg";
import s2 from "../../assets/images/Group 150.svg";
import s3 from "../../assets/images/Group 151.svg";
import s4 from "../../assets/images/Group 152.svg";
import s5 from "../../assets/images/Group 153.svg";
import "../../assets/styles/component_4.css"

const Footer = () => {
  return (
    <>
    <div className="c4-w">
      <div style={{ background: "black", color: "white", padding: "10rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between" , alignItems: "flex-end" }}>
          <div style={{ display: "grid", gap: "1rem"}}>
            <img src={foot}></img>
            <div style={{ height: "1rem" }}></div>
            <span>
              Address:<br></br>22503 Katy Freeway, Suite 511, Katy TX 77450
            </span>
            {/* <span>+91 99999 99999</span> */}
            <span>contact@tanisiinc.com</span>
          </div>
          <div style={{ display: "grid", gap: "1rem", height: "fit-content" }}>
            <div>Home</div>
            <span>SOLUTIONS</span>
            <span>CAREERS</span>
            <span>Contact</span>
          </div>
          <div style={{ display: "grid", gap: "1rem", height: "fit-content" }}>
            <span>Follow Us </span>
            <div style={{ display: "flex" , gap:"0.5rem" }}>
              <img src={s1}></img>
              <img src={s2}></img>
              <img src={s3}></img>
              <img src={s4}></img>
              <img src={s5}></img>

            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "#2F61C3", color: "white" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "1rem",
          }}
        >
          <div>All rights reserved.</div>
          <div>Copyright © 2024 Tanisi Systems Inc</div>
          <div>Terms & Conditions | Privacy Policy</div>
        </div>
      </div>
      </div>
      <div className="c4-m">
      <div style={{ background: "black", color: "white", padding: "4rem 1rem",fontSize:"small" }}>
        <div style={{ display: "grid", justifyContent: "space-between" , alignItems: "flex-end", gap:"1rem"}}>
          <div style={{ display: "grid", gap: "1rem"}}>
            <img src={foot}></img>
            <div style={{ height: "1rem" }}></div>
            <span>
              Address:<br></br>22503 Katy Freeway, Suite 511, Katy TX 77450
            </span>
            {/* <span>+91 99999 99999</span> */}
            <span>contact@tanisiinc.com</span>
          </div>
          <div style={{ display: "grid", height: "fit-content" }}>
            <div>Home</div>
            <span>SOLUTIONS</span>
            <span>CAREERS</span>
            <span>Contact</span>
          </div>
          <div style={{ display: "grid", gap: "1rem", height: "fit-content" }}>
            <span>Follow Us </span>
            <div style={{ display: "flex" , gap:"0.5rem" }}>
              <img src={s1}></img>
              <img src={s2}></img>
              <img src={s3}></img>
              <img src={s4}></img>
              <img src={s5}></img>

            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "#2F61C3", color: "white" }}>
        <div
          style={{
            display: "flex",
            padding: "1rem",
            fontSize:"small",
            flexWrap:"wrap",
            gap:"1rem"
          }}
        >
          <div>All rights reserved.</div>
          <div>Copyright © 2024 Tanisi Systems Inc</div>
          <div>Terms & Conditions | Privacy Policy</div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
