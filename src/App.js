import React, { Component } from 'react';
import './styles/App.css';
import InputContainer from './components/inputContainer.js';
import ActionsPanel from './components/actionsPanel.js';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [{ text: '', name: '0' }],
      lastIndex: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    const target = event.target
    const itemText = target.value
    const itemName = target.name
    const items = this.state.items.map( item => item.name === itemName ? { ...item, text: itemText} : item)
    this.setState({items: items}, () => {
      let lastItem = items[items.length-1]
      if(lastItem.name === itemName) {
        const item = {text: "", name: this.state.lastIndex+1+""}
        this.handleSubmit(item)
      }
    });

  }

  handleSubmit(item) {
    this.setState({
      items: [
        ...this.state.items,
        item,
      ],
      lastIndex: parseInt(item.name)
    })
  }

  handleDelete(event){
    if(this.state.items.length === 1) {
      this.setState({
        items: [{text: "", name: "0"}],
        lastIndex: 0,
      })
    } else {
      const index = event.currentTarget.name
      this.setState({
        items: [
          ...this.state.items.filter( item => item.name !== index)
        ]
      })
    }
  }

  render() {
    return (
      <div className="site-wrapper">
        <Grid>
          <Row justify="center" className="site-row">
            <Col xs={8} md={12} className="">
              <div className="site-body">
                <form onSubmit={this.props.addItem}>
                  <div className="formContent">
                    <h4>
                      Test
                    </h4>
                    <div className="formItemList">
                      {
                        this.state.items.map( (item, index) =>
                          <InputContainer
                            handleChange={this.handleChange}
                            handleDelete={this.handleDelete}
                            key={index}
                            index={item.name}
                            currentItem={item}
                          />
                        )
                      }
                    </div>
                  </div>
                  <ActionsPanel />
                </form>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
