import React, { Component } from 'react';
import './styles/App.scss';
import InputContainer from './components/inputContainer.js';
import ActionsPanel from './components/actionsPanel.js';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="site-wrapper">
        <Grid>
          <Row justify="center" className="site-row">
            <Col xs={8} md={12} className="">
              <div className="site-body"> <div className="formContent">
                  Test
                  <div className="formItemList">
                    <InputContainer />
                  </div>
                </div>
                <ActionsPanel />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
