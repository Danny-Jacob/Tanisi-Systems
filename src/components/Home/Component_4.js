import React from "react";
import imgban from "../../assets/images/bottom-ban.svg";
const Component_4 = () => {
  return (
    <div style={{ background: `url(${imgban})`, padding: "10rem" }}>
      <span style={{ fontSize: "65px", position: "inherit" }}>
        WE APPRECIATE YOUR <br />
        INTEREST IN US!
      </span>{" "}
      <br />
      <button style={{marginTop:'1rem',padding:'0.5rem',color:'white',border:'none',borderRadius:'10px',background:'#2F61C3'}}>Get in Touch</button>
    </div>
  );
};

export default Component_4;
