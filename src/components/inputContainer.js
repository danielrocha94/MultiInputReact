import React, { Component } from 'react';
import {TextField, IconButton} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import '../styles/inputContainer.scss';

const styles = {
  textField: {
    width: "100%",
    maxWidth: "600px",
  },
  button: {
    height: "100%",
    marginTop: "10px",
  }
};

class InputContainer extends Component {
  render() {
    return (
      <div className="">
        <div className="formItem">
            <TextField
              id="attribute"
              className={this.props.classes.textField}
              label="test attribute"
            />
            <IconButton className={this.props.classes.button} aria-label="Delete">
              <ClearIcon/>
            </IconButton>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)( InputContainer );
