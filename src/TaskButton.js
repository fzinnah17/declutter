import React from "react";

function TaskButton({ onValue, removeValue }) {
    const handleClick = () => {
        
        const taskName = prompt("Enter Task: ");
        if(taskName.length >0){
            onValue(taskName);
    }
   // const removeHandler=()=>{

        //removeValue(onValue.filter((el) => el.id !== el.id))
        //console.log(onValue)
    //}

    }

    return (
        <button 
            className="AddBtn"
            type="submit"
            onClick={handleClick}
        > + Add Task </button>

        //<button
        //className="DltBtn"
        //type="submit" onClick={removeHandler}> - Delete Task
        //</button>

    )
}

export default TaskButton;
//<button 
//className="DeleteBtn"
//type="submit"
//onClick={clearList}> - Delete Task </button>
//)