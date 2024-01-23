// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const NewTask = ({ addTask }) => {
//   const [title, setTitle] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (title.trim() === '') {
//       // Prevent adding empty tasks
//       return;
//     }
//     const newTask = {
//       id: new Date().getTime(),
//       title: title,
//     };

//     addTask(newTask);
//     window.location.href = '/'; 
//   };

//   return (
//     <div>
//       <h2>Add New Task</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//         </label>
//         <button type="submit">Add Task</button>
//       </form>
//       <Link to="/">Back to Task List</Link>
//     </div>
//   );
// };

// export default NewTask;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewTask = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      // Prevent adding empty tasks
      return;
    }
    const newTask = {
      id: new Date().getTime(),
      title: title,
    };

    addTask(newTask);
    window.location.replace('/');
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <button type="submit">Add Task</button>
      </form>
      <Link to="/">Back to Task List</Link>
    </div>
  );
};

export default NewTask;

