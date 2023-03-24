import React, { useState } from "react";
import "../../styles/index.css";

const ToDoInput = ({addToDo}) => {

    const [ label , setLabel ] = useState('');
    
    const handleToDo = (e) => {
        if(e.key.toLowerCase() === "enter") {
            addToDo(label);
            setLabel('')
        }
    };

    return (
        <div  >
            <input 
            id="todoinput"
            type="text" 
            placeholder="Enter a task..."
            value={label}
            onChange={e => setLabel(e.target.value)}
            onKeyDown={e => handleToDo(e)}
            />
        </div>
    )
};

export default ToDoInput;