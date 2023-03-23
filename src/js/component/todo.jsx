import React, { useState } from "react";
import "../../styles/index.css";
import ToDoInput from "./todoinput.jsx";

const ToDo = ({todo, handleDelete }) => {

    const {title} = todo

 
    return (
        <div  className="todo">
            {title}
            <div className="d-flex">
                <i onClick={() => handleDelete(title)} className="fas fa-times"></i>
                <i className="fas fa-edit"></i>
            </div>
            
        </div>
    )
};

export default ToDo;