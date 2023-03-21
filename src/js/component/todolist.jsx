import React from "react";
import "../../styles/index.css";
import ToDo from "./todo.jsx"

const ToDoList = ({ todos, handleDelete }) => {
    return (
        <div id="todolist" className="d-flex flex-column">
            {todos.map((todo) => {
                return (
                    <ToDo 
                    todo={todo}
                    handleDelete={handleDelete}
                    />
                )
            })}
            <p id="numerodeitems">
                {todos.length} item left
            </p>
        </div>
    )
};

export default ToDoList;