import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Home/Landing";
import Solution from "./components/Solutions/Solution";
import Careers from "./components/Careers/Careers";
import ApplyOnline from "./components/Careers/ApplyOnline";
import Referral from "./components/Careers/Referral";


import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar";
import JobDescription from "./components/Careers/JobDescription";
import Services from "./components/Solutions/Services";
import Development from "./components/Solutions/Development";
import ScrollToTop from "./components/ScrollToTop";
import Products from "./components/Solutions/Products";

function App() {
  return (<>
     {/* <Landing/> */}
    
     <Router>
      {/* <Navbar /> */}
      <ScrollToTop/>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply/:jobId" element={<JobDescription />} />
        <Route path="/services" element={<Services />} />
        <Route path="/development" element={<Development />} />
        <Route path="/apply-online" element={<ApplyOnline />} />
        <Route path="/referral-program" element={<Referral />} />
        <Route path="/products" element={<Products />} />

      </Routes>
    </Router>
      </>
    
  );
}

export default App;


