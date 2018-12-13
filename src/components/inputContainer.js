import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class InputContainer extends Component {
  render() {
    return (
      <div>
        <div style={{color: "gray"}}>
          test attribute
        </div>
        <div>
          <input type="text" name="name" className="form-control" />
          <Button>X</Button>
        </div>
      </div>
    );
  }
}

export default InputContainer;
