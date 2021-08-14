import applogo from './images/declutter.png'; // import the images from out images folder
import cleanroom from './images/1clean.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={applogo} alt={"app logo"} /> 
        <img className="Clean-Room" src={cleanroom} alt={"clean room"} />
      </header>
    </div>
  );
}
// here we see the img tag and i gave it a className, this is for CSS, and inside src={} is the import name from the top

export default App;


