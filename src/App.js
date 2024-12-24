import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Description from "./components/descrption/description";
import BottomContent from "./components/bottom-content/BottomContent";
import NavMenue from "./components/navMenu/NavMenue";
import ProjectSection from "./pages/Project-section/Project-section";
import AboutPage from "./pages/AboutPage/Aboutpage";

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

            {/* <Route path="/projects" element={<ProjectSection />} /> */}

            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Routes></Routes>
        </div>
        <div className="ProjectSection">
          <ProjectSection />
        </div>
        <div className="bottom-fld">
          <BottomContent />
        </div>
      </div>
    </Router>
  );
}

export default App;
