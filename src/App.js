import Description from './components/descrption/description';
import NavMenue from './components/navMenu/NavMenue';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="heading_fld">
        <NavMenue />
      </div>
      <div>
        <Description />
      </div>
    </div>
  );
}

export default App;
