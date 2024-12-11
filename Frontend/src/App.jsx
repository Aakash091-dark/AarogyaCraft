import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import OurServices from '../../Pages/OurServices';

function App() {
  return (
    <Router>
      <Navbar />
      <LandingPage/>
      <Routes>

        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<OurServices />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;