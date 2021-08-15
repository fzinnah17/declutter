import React from "react";
import './ToDoList.css';
import Box from '@material-ui/core/Box';
import ToDo from "./ToDo.js"

function ToDoList({ tasks }) {
    
    return (
        <Box className="container">
            <div id="Task-List">
                {tasks.map(task => <ToDo title={task} />)}
            </div>
        </Box>
    );
}

export default ToDoList;