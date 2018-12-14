import React, { Component } from 'react';
import {ButtonToolbar } from 'react-bootstrap';
import '../styles/actionsPanel.scss';

class ActionsPanel extends Component {
  render() {
    return (
      <div className="actionsPanel_container">
        <ButtonToolbar  className="actionsPanel_buttonToolbar">
          <a href="#" className="pull-right" style={{ color: "#527FDB" }}>Save</a>
          <a href="#" className="pull-right">Cancel</a>
        </ButtonToolbar>
      </div>
    );
  }
}

export default ActionsPanel;
