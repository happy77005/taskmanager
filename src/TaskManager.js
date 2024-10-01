// src/TaskManager.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [taskTitle, setTaskTitle] = useState('');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:5000/tasks');
        setTasks(response.data);
    };

    const addTask = async () => {
        if (taskTitle) {
            const response = await axios.post('http://localhost:5000/tasks', { title: taskTitle });
            setTasks([...tasks, response.data]);
            setTaskTitle('');
        }
    };

    const completeTask = async (id) => {
        await axios.put(`http://localhost:5000/tasks/${id}`, { completed: true });
        fetchTasks();
    };

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:5000/tasks/${id}`);
        fetchTasks();
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        {task.title} {task.completed ? '(Completed)' : ''}
                        <button onClick={() => completeTask(task._id)}>Complete</button>
                        <button onClick={() => deleteTask(task._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;
