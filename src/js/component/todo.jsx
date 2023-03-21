import React from "react";
import "../../styles/index.css";

const ToDo = ({todo, handleDelete}) => {

    const {title} = todo
    return (
        <div  className="todo">
            {title}
            <i onClick={() => handleDelete(title)} className="fas fa-times"></i>
        </div>
    )
};

export default ToDo;