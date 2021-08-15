import React from "react";

function TaskButton({ onValue }) {
    const handleClick = () => {
        
        const taskName = prompt("Enter Task: ");
        if(taskName.length >0){
            onValue(taskName);
    }

    }

    return (
        <button 
            className="AddBtn"
            type="submit"
            onClick={handleClick}
        > + Add Task </button>

    )
}

export default TaskButton;