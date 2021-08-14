import applogo from './images/declutter.png'; // import the images from out images folder
import ImageState from './Image_state';
import './App.css';
import Tasks from './Tasks';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={applogo} alt={"app logo"} />
      </header>
      <body className="App-body">
          <ImageState />
          <Tasks/>
      </body>
      <Box className="AddBtn">
        <Button />
      <AddIcon />
      <text>Add Task</text>
    
      </Box>
      </div>
  );
}
// here we see the img tag and i gave it a className, this is for CSS, and inside src={} is the import name from the top

export default App;


