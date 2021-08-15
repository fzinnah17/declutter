import React from "react";
import './ToDoList.css';
import Box from '@material-ui/core/Box';
import ToDo from "./ToDo.js"
import ImageState from './Image_state'


function ToDoList({ tasks }) {
    // console.log(tasks.length);
    var count = tasks.length;

    return (
        <Box className="container">
               <div className="ContainerImage">
                    <ImageState count={count}/>
                </div>
                <div className="sizedbox"></div>
            <div id="Task-List">
                <div>
                {tasks.map(task => <ToDo title={task} />)}  
                </div>           
            </div>


        </Box>
        
    
    );
    
}

export default ToDoList;