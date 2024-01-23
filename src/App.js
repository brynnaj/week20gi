import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoList from './components/easy'; // Adjust the path to 'easy.jsx'
import Movie from './components/movie'; // Adjust the path to 'movie.jsx'
import TaskList from './components/hard'; // Adjust the path to 'hard.jsx'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Easy</Link>
            </li>
            <li>
              <Link to="/movie">Movie</Link>
            </li>
            <li>
              <Link to="/hard">Hard</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/movie" element={<Movie />} />
          <Route path="/hard" element={<TaskList />} />
          <Route path="/" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



