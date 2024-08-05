import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Home/Landing";
import Solution from "./components/Solutions/Solution";
import Careers from "./components/Careers/Careers";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar";
import JobDescription from "./components/Careers/JobDescription";

function App() {
  return (<>
     {/* <Landing/> */}
    
     <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply/:jobId" element={<JobDescription />} />
      </Routes>
    </Router>
      </>
    
  );
}

export default App;


