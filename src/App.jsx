import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <ToDoList/>
    </>
  )
} 

export default App;
