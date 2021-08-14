import React from "react";


class Button extends React.Component{
    render(){
        return(
            <button className="AddBtn" onClick={() => {console.log('hi');}}> + Add Task </button>
        );}
}

export default Button;