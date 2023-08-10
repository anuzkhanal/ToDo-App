import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <h1>To-Do List App</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
