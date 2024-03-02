import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function ToDoList() {
    const [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone:false }]);
    const [newTodo, setNewTodo] = useState("");

    const addNewTask = () => {
        if (newTodo.trim() === "") return; // Prevent adding empty tasks
        setTodos(prevTodos => [...prevTodos, { task: newTodo, id: uuidv4() , isDone:false}]);
        setNewTodo(""); // Resetting the newTodo state
    };
    const updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }
    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }

    const MarkAllAsDone = () => {
        setTodos(prevTodos => {
            return prevTodos.map(todoItem => {
                return {
                    ...todoItem,
                   isDone:true
                };
            });
        });
    };

    const  markAsDone = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone:true
                    };
                } else {
                    return todo;
                }
            });
        });
    };
    return (
        <>
            <h1><b>The To DO App</b></h1>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue} />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br/><br/><br/>
            <h4>Task Todo</h4>
            <ul>
                {todos.map((item) => (
                    <li key={item.id}>
                        <span style={ item.isDone ? {textDecorationLine:"line-through"} : {}}>{item.task}</span>
                        <button onClick={() => deleteTodo(item.id)}>Delete</button>
                        <button onClick={() => markAsDone(item.id)}>markAsDone</button>
                    </li>
                ))}
            </ul>
            <br /><br />
            <button onClick={MarkAllAsDone}>MarkAllAsDone</button>
        </>
    );
}
export default ToDoList;

//lacture 694
