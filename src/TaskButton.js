import React from "react";

function TaskButton({ onValue }) {
    const handleClick = () => {
        const taskName = prompt("Enter Task: ");
        onValue(taskName);
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