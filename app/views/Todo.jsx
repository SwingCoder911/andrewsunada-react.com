import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
require('../sass/Todo.scss');

export class Todo extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="todo">
        <h1>Todo App</h1>
        <Button>Click Me!</Button>
      </div>
    );
  }
}

export default Todo
