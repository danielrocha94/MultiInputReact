import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import '../styles/actionsPanel.css';

class ActionsPanel extends Component {
  render() {
    return (
      <div className="actionsPanel_container">
        <ButtonToolbar  className="actionsPanel_buttonToolbar">
          <a className="pull-right" style={{ color: "#527FDB" }}>Save</a>
          <a className="pull-right">Cancel</a>
        </ButtonToolbar>
      </div>
    );
  }
}

export default ActionsPanel;
