import logo from './logo.svg';
import './App.css';
import CircleLoader from './CircleLoader';
import PathLoader from './PathLoader';

function App() {
  return (
    <div className="container">
      <h1> Let's spin </h1>
      <div>
        <PathLoader />
      </div>
      <div>
        <CircleLoader />
      </div>
    </div>
  );
}

export default App;
