import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import "../styles/styles.css"

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");

    const addTask = () => {
        if (taskInput.trim() !== "") {
            setTasks([...tasks, { task: taskInput, completed: false }]);
            setTaskInput(""); }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };


    const toggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) =>
        i=== index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const task = event.target.task.value;
        addTask(task);
        event.target.task.value = '';
    }


    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <input
        type="text"
        className="task-input"
        placeholder="Enter task..."
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button className="add-button" onClick={addTask}>
        Add Task
      </button>
           
            <div className="tasks">
                {tasks.map((task, index) => (
                    <TodoItem
                    key={index}
                    task={task.task}
                    completed={task.completed}
                    onDelete={() => deleteTask(index)}
                    onToggle={() => toggleTask(index)}
                    />
                ))}
            </div>
        </div>


    );
};

export default TodoList;