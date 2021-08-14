import React from "react";
import "./Tasks.css";
import Box from '@material-ui/core/Box';

class Tasks extends React.Component{
    render(){
        
    return(
        <Box className="container">
            <div className="Task-List">
                <h1>Task 1 is this one</h1>
                <h1>Task 2</h1>
                <h1>Task 3</h1>
                <h1>Task 4</h1>
                <h1>Task 5</h1>
                <h1>Task 6</h1>
                <h1>Task 7</h1>
                <h1>Task 8</h1>
                <h1>Task 9</h1>
                <h1>Task 10</h1>
                <h1>Task 11</h1>
                <h1>Task 12</h1>
            </div>
        </Box>
    );
    }
}

export default Tasks;