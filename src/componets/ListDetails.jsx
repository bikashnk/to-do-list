import React, { Fragment, useState } from 'react';
import moment from "moment";
import RenderTask from './RenderTask.jsx';
import AddToDoList from './AddToDoList.jsx';
import {contactList} from '../constant.jsx';
import background from '../images/background.jpg';

const ListDetails = props => {
  const [todos, setTodos] = useState(contactList);

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addTodo = task => {
    const newtask = {
      "date": moment().format('dddd, DD MMMM YY'), 
      "taskName": task,
      "isCompleted" : false
    }
    const newTodos = [...todos];
    newTodos.push(newtask);
    setTodos(newTodos);
  };


  return (
    <Fragment>
      <div className="image-container">
        <img
          className="background-image"
          src={background}
          alt="Avatar"
        />
      </div>
      <div className="bottom-left">
        <h1>Team To-Do List</h1>
        <p style={{ fontSize: '18px', marginLeft: '2%' }}>{moment().format('dddd, DD MMMM YY')}</p>
      </div>
      <div  className="details-list">
      {
        todos.map((todo, index) => (
          <RenderTask
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo = {completeTodo}
          />
        ))
      }
      <AddToDoList addTodo = {addTodo}/>
      </div>
    </Fragment>
  );
};

export default ListDetails;