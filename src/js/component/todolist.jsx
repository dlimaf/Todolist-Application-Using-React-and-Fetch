import React from "react";
import "../../styles/index.css";
import ToDo from "./todo.jsx"

const ToDoList = ({ todos , handleDelete , onActualizarTarea }) => {
    return (
        <div id="todolist" className="d-flex flex-column">
            {todos.map((todo, id) => {
                return (
                    <ToDo 
                    todo={todo}
                    id={id}
                    handleDelete={handleDelete}
                    onActualizarTarea={onActualizarTarea}
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