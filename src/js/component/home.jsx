import React, { useState } from "react";
import Title from "./title.jsx";
import "../../styles/index.css";
import ToDoInput from "./todoinput.jsx"
import ToDoList from "./todolist.jsx";


//create your first component
const Home = () => {

	const [ todos , setTodos ] = useState([]);
	
	const addToDo = (title) => {
		const newToDo = {
			title,
		}
		const toDoList = [...todos,newToDo]
		setTodos(toDoList);

	};

	const handleDelete = (title) => {
		const updatedList = todos.filter(todo => todo.title !== title);
		setTodos(updatedList);
	}
	

	
	return (
		<div className="container">
			<div className="d-flex align-items-center justify-content-center flex-column">
				<Title />
				<ToDoInput addToDo={addToDo} />
				<ToDoList 
				todos={todos}
				handleDelete={handleDelete} />

			</div>
		</div>
	);
};

export default Home;
