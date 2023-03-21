import React, { useState } from "react";
import "../../styles/index.css";

const ToDoInput = ({addToDo}) => {

    const [ title , setTitle ] = useState('');
    
    const handleToDo = (e) => {
        if(e.key.toLowerCase() === "enter") {
            addToDo(title);
            setTitle('')
        }
    }

    return (
        <div >
            <input 
            id="todoinput"
            type="text" 
            placeholder="Enter a task..."
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => handleToDo(e)}
            />
        </div>
    )
};

export default ToDoInput;