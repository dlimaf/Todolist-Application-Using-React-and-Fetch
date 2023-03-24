import React, { useState , useEffect } from "react";
import Title from "./title.jsx";
import "../../styles/index.css";
import ToDoInput from "./todoinput.jsx"
import ToDoList from "./todolist.jsx";


//create your first component
const Home = () => {

	const [ todos , setTodos ] = useState([]);

	const url = 'https://assets.breatheco.de/apis/fake/todos/user/dayanalf'
	
	useEffect(() => {
	fetch(url)
    .then(response => response.json())
    .then(data => setTodos(data))
	},[])
	
	const addToDo = (label) => {
		
		if(label === '') {
			return 
		}

		const newToDo = {
			label,
			done: false
		}
		const toDoList = [...todos,newToDo]
		setTodos(toDoList);

	};


	useEffect(() => {
		if(todos.length !== 0) {
			actualizarApi(todos);
		}
	  }, [todos])


	const handleDelete = (label) => {
		const updatedList = todos.filter(todo => todo.label !== label);
		setTodos(updatedList);
	};

	function onActualizarTarea(objEditarTarea,id) {
		const { label } = objEditarTarea
		console.log('newLabel', label)
		const updateTodo = todos.map((todo, idMap)=>{
			console.log('todo.label', todo.label)
			console.log('objEditarTarea.label', objEditarTarea.label)
			if(idMap == id){
				return {label:label , done:false}
			}else{
				return todo
			}
		})
		console.log('updateTodo', updateTodo)
		// let findtodo = todos.filter(todo => todo === title)
		setTodos(updateTodo)
	}

	const actualizarApi = (todos) => {
		fetch(url, {
			method: "PUT",
			body: JSON.stringify(todos),
			headers: {
			  "Content-Type": "application/json"
			}
		  })
		  .then(resp => {
			  console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
			  console.log(resp.status); // el código de estado = 200 o código = 400 etc.
			  console.log(resp.json()); // Intentará devolver el resultado exacto como cadena (string)
			  return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
		  })
		  .then(data => {
			  //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
			  console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
		  })
		  .catch(error => {
			  //manejo de errores
			  console.log(error);
		  });
	};

	return (
		<div className="container">
			<div className="d-flex align-items-center justify-content-center flex-column">
				<Title />
				<ToDoInput addToDo={addToDo}  />
				<ToDoList 
				todos={todos}
				handleDelete={handleDelete}
				onActualizarTarea={onActualizarTarea}
				/>

			</div>
		</div>
	);
};


export default Home;
