import React, { Component } from 'react';
import {TextField, IconButton} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import PropTypes from 'prop-types';
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
              name={this.props.index}
              label="test attribute"
              value={this.props.currentItem.text}
              onChange={this.props.handleChange}
            />
            <IconButton
              onClick={this.props.handleDelete}
              name={this.props.index}
              className={this.props.classes.button}
              aria-label="Delete">
              <ClearIcon/>
            </IconButton>
        </div>
      </div>
    );
  }
}

InputContainer.propTypes = {
  index: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  currentItem: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default withStyles(styles)( InputContainer );
