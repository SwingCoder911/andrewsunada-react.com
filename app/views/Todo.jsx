import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import TodoForm from '../components/TodoForm';
require('../sass/Todo.scss');

export class Todo extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="todo container">
        <div className="col-md-8 col-md-offset-2">
          <h1>Todo App</h1>
          <TodoForm />
        </div>
      </div>
    );
  }
}

export default Todo
