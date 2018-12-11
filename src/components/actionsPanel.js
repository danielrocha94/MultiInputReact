import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

class ActionsPanel extends Component {
  render() {
    return (
      <div>
        <div>
          <ButtonToolbar>
            <Button>Cancel</Button>
            <Button>Save</Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default ActionsPanel;
