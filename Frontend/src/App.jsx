import Navbar from "./Components/Navbar"
import LandingPage from "./Components/landingpage"
import Contact from "./Components/Contact"

function App() {
  return (
    <>
    <Navbar/>
    <LandingPage/>
    <Footer/>
    </>
  )
}
export default App





// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import LandingPage from "./Components/LandingPage";
// import Contact from "./Pages/Contact";
// import Footer from "./Components/Footer";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <LandingPage/>
//       <Routes>

//         {/* <Route path="/" element={<LandingPage />} /> */}
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


