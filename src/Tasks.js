import React from "react";
import { Component } from "react";
import "./Tasks.css";
import Task from './Task'
import Box from '@material-ui/core/Box';

class Tasks extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }
    render(){
        
    return(
        <Box className="container">
            <form>
            <div className="Task-List">
            <div>
                <label>
                    <input type="checkbox" /> 
                    Do HW for CS 1
                    </label>
                    </div>
                    <div>
                <label>
                    <input type="checkbox" /> 
                    Study for exam for CS
                    </label>
                    </div>
                    <div>
                <label>
                    <input type="checkbox" /> 
                    Do Laundry
                    </label>
                    </div>
                    <div>
                <label>
                    <input type="checkbox" /> 
                    Call the Internet Provider
                    </label>
                    </div>
                    <div>
                <label>
                    <input type="checkbox" /> 
                    Read Chapter 3 for English
                    </label>
                    </div>
                    <div>
                <label>
                    <input type="checkbox" /> 
                    Start Project for CS 11
                    </label>
                    </div>
                    <div>
                <label>
                    <input type="checkbox" /> 
                    Apply for jobs
                    </label>
                    </div>
                    <div>
                <label>
                    <input type="checkbox" /> 
                    Take Shower
                    </label>
                    </div>
                    <div>
                <label>
                    <input type="checkbox" /> 
                    Call Mom
                    </label>
                    </div>
                    <div>
                <label>
                    <input type="checkbox" /> 
                    Practice Math 112
                    </label>
                    </div>
                    <div>
                <label>
                    <input type="checkbox" /> 
                    Buy Groceries
                    </label>
                    </div>
                    <div>
                <label>
                    <input type="checkbox" /> 
                    Finish writing History essay
                    </label>
                    </div>

                    

            </div>
            </form>

        </Box>
    );
    }
}

export default Tasks;
