import Description from './components/descrption/description';
import NavMenue from './components/navMenu/NavMenue';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="heading_fld">
        <NavMenue />
      </div>
      {/* <div className='introduction_fld'> */}
        <Description />
      {/* </div> */}
    </div>
  );
}

export default App;
