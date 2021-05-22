import './App.css';
import Nav from "./components/Nav";
import Results from "./components/Results";

function App() {
  return (
    <div className="container">
      <div className="header"><h1>Smartie Automotive Information</h1></div>
      <nav className="nav"><Nav /></nav>
      <div className="left">Left</div>
      <div className="main">
        <Results />

      </div>
      {/* <div className="right">Right</div> */}
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
