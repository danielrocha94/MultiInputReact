import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import '../styles/inputContainer.scss';

class InputContainer extends Component {
  render() {
    return (
      <div className="">
        <div style={{color: "gray"}}>
          test attribute
        </div>
        <div className="formItem">
          <div className="formItemInputContainer">
            <input type="text" name="name" />
            <div>
              <div className="inputAreaHint">
              </div>
            </div>
          </div>
          <svg id="formItemDeleteSvg" height="30" width="30" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
        </div>
      </div>
    );
  }
}

export default InputContainer;
