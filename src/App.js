import './App.css';
import Nav from "./components/Nav"

function App() {
  return (
    <div className="container">
      <div className="header"><h1>Smartie Automotive Information</h1></div>
      <nav className="nav"><Nav /></nav>
      <div className="left">Left</div>
      <div className="main"><h3>Main</h3>
        <p>Officia proident ea fugiat magna veniam magna deserunt irure. Aliqua anim non duis sunt dolor nulla tempor id ad. Culpa ea nulla adipisicing irure proident magna aute. Qui nisi aliqua non sint labore Lorem deserunt deserunt eiusmod laborum. In consectetur enim exercitation velit elit ad excepteur ex. </p>
        <p>Do ad commodo sint reprehenderit incididunt cupidatat reprehenderit reprehenderit ut est. Commodo sunt dolore deserunt voluptate. Id tempor aliqua nisi qui labore sunt quis anim. Nisi ullamco veniam exercitation incididunt sit laboris. Reprehenderit veniam aute voluptate minim.</p>
      </div>
      {/* <div className="right">Right</div> */}
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
