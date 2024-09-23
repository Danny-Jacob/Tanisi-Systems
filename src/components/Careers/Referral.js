import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Home/Footer'
import img4 from "../../assets/images/Image06.jpg";

const Referral = () => {
  return (
    <div><Navbar/>
    <div style={{height:"4rem"}}></div>
    <div className="image-container">
      <img src={img4} alt="Your Image" className="background-image" />
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
          should your candidate be hired by Tanisi Systems. for a full-time
          regular or 6+ month contract position within United States, and if
          that person satisfactorily completes the Introductory Period and their
          first three months at the project site, you will receive a $600 bonus
          for the referral.
        </div>
      </div>
      <div style={{height:"8rem"}}></div>

    <Footer/></div>
  )
}

export default Referral