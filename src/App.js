import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Description from "./components/descrption/description";
import BottomContent from "./components/bottom-content/BottomContent";
import NavMenue from "./components/navMenu/NavMenue";
import ProjectDetails from "./components/Project-details/Project-details";
import AboutPage from "./pages/AboutPage/Aboutpage";
// import ProjectDetails from "./components/Project-details/Project-details";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="heading_fld">
          <NavMenue />
        </div>
        <div className="details_container">
          <Routes>
            <Route path="/" element={<Description />} />

            <Route path="/projects" element={<ProjectDetails />} />

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <div className="about-fld">
          <AboutPage />
        </div>
        <ProjectDetails />
        <div className="bottom-fld">
          <BottomContent />
        </div>
      </div>
    </Router>
  );
}

export default App;
