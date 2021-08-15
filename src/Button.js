import React, {useState} from "react";
import Tasks from './ToDoList.js';

class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: null};
    }

    render() {
        return (
            <button className="AddBtn" type="submit" onClick={() => { var input_task = prompt("Enter Task: "); this.state.value = input_task; TakeInput(this.state.value);}}> + Add Task </button>
        );
    }
}

function TakeInput(value){
    
    console.log(value);
 
}

export default Button;