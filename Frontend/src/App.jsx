import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Contact from "./Components/Contact";
import OurServices from "./Pages/OurServices";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";
import Terms from "./Pages/Terms";

function App() {
  return (
    <Router>
      <Navbar />
      <LandingPage/>
      <Routes>

        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/terms" element={<Terms />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;