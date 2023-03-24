import React, { useState } from "react";
import "../../styles/index.css";

const ToDo = ({todo, id, handleDelete, onActualizarTarea }) => {

    const [edit , setEdit ] = useState(false);

    function ModoEdicionActivado() {

        const [ valor , setValor ] = useState(todo.label)

        function handleChange (e) {
            const text = e.target.value;
            setValor(text);
        };

        function handleClick (e) {
            
            onActualizarTarea({
                label: valor,
                done: false
            }, id)

            return setEdit(false)
        }

        return (

            <>
                <input
                id="todoinput" 
                type="text"
                onChange={handleChange}
                value={valor}
                 />
                
                <div className="d-flex">
                    <i onClick={() => handleDelete(todo.label)} className="fas fa-times"></i>
                    <i 
                    className="fas fa-save"
                    onClick={handleClick}
                    ></i>
                </div>
            </>

        )
    };

    function ModoEdicionDesactivado() {
        return (
            <>
                {todo.label}
                <div className="d-flex">
                    <i onClick={() => handleDelete(todo.label)} className="fas fa-times"></i>
                    <i 
                    className="fas fa-edit"
                    onClick={() => setEdit(true)}
                    ></i>
                </div>
                 
            </>
        )
    }
 
    return (
        <div  className="todo">
            {
                edit
                ? <ModoEdicionActivado/>
                : <ModoEdicionDesactivado/>
            }            
        </div>
    )
};

export default ToDo;