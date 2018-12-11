import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputContainer from './components/inputContainer.js';
import ActionsPanel from './components/actionsPanel.js';

class App extends Component {
  render() {
    return (
      <div className="">
        <div>
          Test
        </div>

        <InputContainer />

        <ActionsPanel />
      </div>
    );
  }
}

export default App;
