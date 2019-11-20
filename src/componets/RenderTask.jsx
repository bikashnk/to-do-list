import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import trash from '../images/trash.png';

const RenderTask = ({ todo, index, removeTodo, completeTodo }) => {
  return (
    <Fragment>
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        <input 
          className="todo-checkbox" 
          readOnly
          type="checkbox" 
          checked={todo.isCompleted}
          onClick={() => completeTodo(index)}
          />
        <span className='task-span' title={todo.taskName}>{todo.taskName}</span>
        <div className="trash-block">
          <img
          className="trash-icon"
          onClick={() => removeTodo(index)}
          src={trash}
          alt="trash"
        />
        </div>
      </div>
    </Fragment>
  );
};

export default RenderTask;