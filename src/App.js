import React, { Component } from 'react';
import './App.css';

import GratefulForm from './GratefulForm'
import GratefulLog from './GratefulLog'

const MAX_INPUTS = 3


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showLogs: false
    }

  }

  handleGratefulSave = (inputs) => {
    // TODO: Save these things

    this.setState({
      showLogs: true
    })
  }

  render() {
    return (
      <div className="container lg-3">
        <div class="row justify-content-md-center">
          <div class="col col-lg-4">
            <h2>Gratefruit</h2>

          </div>

        </div>

        <div hidden={this.state.showLogs} class="row justify-content-md-center">
          <div class="col col-lg-4">
          <p>What are you grateful for today?</p>
            <GratefulForm items="3" onComplete={this.handleGratefulSave} />
          </div>
        </div>

        <div hidden={!this.state.showLogs} class="row justify-content-md-center">
          <div class="col col-lg-4">
          <p>What have you been grateful for?</p>
            <GratefulLog />
          </div>
        </div>

        
      </div>
    );
  }
}

export default App;
