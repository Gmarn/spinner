import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1> Let's spint</h1>
      <div className="spinner-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288">
          <path id="#path" class="path" d="m 211.619 15.642 c -137.447 -2.4711 -264.638 212.481 105.926 435.341 c 0.405975 -0.730988 1.96899 -0.730988 2.375 0 c 382.518 -230.049 234.665 -451.64 92.626 -434.391 c -55.373 6.7245 -81.504 37.4565 -93.814 63.888 c -12.309 -26.4315 -38.44 -57.1635 -93.813 -63.888 c -4.438 -0.539301 -8.86601 -0.8702 -13.3 -0.95 l 0 -0.0001 Z" fill="none" stroke="#5e5e7d" stroke-width="3" stroke-miterlimit="10"/>
        </svg>
        <div class="el"></div>
      </div>
      <h1> End</h1>
    </div>
  );
}

export default App;
