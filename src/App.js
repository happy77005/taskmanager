// src/App.js
import React from 'react';
import TaskManager from './TaskManager'; // Correctly use uppercase 'T' for the import
import './App.css'; // Optional: Import your styles if needed

const App = () => {
    return (
        <div className="App">
            <TaskManager />
        </div>
    );
};

export default App;
