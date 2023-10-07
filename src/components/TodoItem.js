import React from "react";
import './TodoItem.css';

const TodoItem = ({task, completed, onDelete, onToggle }) => {
    return (
        <div className= {`todo-item ${completed ? 'completed' : ''}`}>
            <span onClick={onToggle}>{task}</span>
            <div className="buttons">
        <button className="mark-button" onClick={onToggle}>
          ✔️
        </button>
        <button className="delete-button" onClick={onDelete}>
          🗑️
        </button>
      </div>

        </div>
    );
};

export default TodoItem;