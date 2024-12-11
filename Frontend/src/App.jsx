import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Industries from "./Components/Industries";
// import AboutUs from "./Pages/AboutUs";


function App() {
  return (

    <>
    <Navbar/>
    <LandingPage/>
    <Footer/>
    </>
  )

    <Router>
      <Navbar />
      <LandingPage/>
      <Routes>

        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/aboutus" element={<AboutUs />} /> */}
      </Routes>
      <Industries/>
      <Footer />
    </Router>
  );
}

export default App;