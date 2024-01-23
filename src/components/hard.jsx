import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NewTask from './newtask';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link> /
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/task/new">Add New Task</Link>

      <Routes>
        <Route
          path="/task/new"  
          element={<NewTask addTask={handleAddTask} />} 
        />
      </Routes>
    </div>
  );
};

export default TodoList;


