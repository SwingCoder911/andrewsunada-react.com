import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
require('../sass/Todo.scss');

export class Todo extends Component {
  constructor(){
    super();
  }
  addItem(input){
    console.log("clicked: ", input);
  }
  render() {
    var input;
    return (
      <div className="todo container">
        <div className="col-md-8 col-md-offset-2">
          <h1>Todo App</h1>
          <input ref={node => {
            input = node;
          }}/>
          <Button onClick={() => {
            this.addItem(input.value);
            input.value = "";
          }}>Click Me!</Button>
        </div>
      </div>
    );
  }
}

export default Todo
