import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class TodoForm extends Component {
  constructor(){
    super();
  }
  addItem(input){
    console.log("clicked: ", input);
  }
  render() {
    var input;
    return (
        <div>
          <input ref={node => {
            input = node;
          }}/>
          <Button onClick={() => {
            this.addItem(input.value);
            input.value = "";
          }}>Click Me!</Button>
        </div>
    );
  }
}

export default TodoForm