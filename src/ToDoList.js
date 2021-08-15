import React from "react";
import './ToDoList.css';
import Box from '@material-ui/core/Box';
import ToDo from "./ToDo.js"

function ToDoList(props){
    var value = props.enteredTask;
    console.log(value);
    return(
        <Box className="container">
            <div id="Task-List">
                <ToDo task={'test'}/>
            </div>

        </Box>
    );
}

export default ToDoList;
