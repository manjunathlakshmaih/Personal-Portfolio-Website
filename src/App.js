import Description from "./components/descrption/description";
import BottomContent from "./components/bottom-content/BottomContent";
import NavMenue from "./components/navMenu/NavMenue";
import ProjectDetails from './components/Project-details/Project-details';
import AboutPage from './pages/AboutPage/Aboutpage';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="heading_fld">
        <NavMenue />
      </div>
      <div className="details_container">
        <Description />
      </div>
      <ProjectDetails />
      <AboutPage />
      <BottomContent />
    </div>
  );
}

export default App;
