import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Illness from './Illness';

class Diagnosis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      illnessSearched: false,
      symptoms: "",
    };
    //this.handleSubmitSymptoms.bind(this);
  }

  // Handle Form Search
  handleSubmitSymptoms(event) {
    event.preventDefault();
    const input = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    if (input === "") return;
    else
      this.setState({
        illnessSearched: true,
        symptoms: input,
      });
  }

  render() {
    return (
      <div className="Diagnosis">
        <div className="text-center">
          <h1>What is your illness?</h1>

          <form className="symptoms"
                onSubmit={this.handleSubmitSymptoms.bind(this)}>
            <div className="row">
              <div className="col-md-4 col-md-offset-3
                col-sm-5 col-sm-offset-3
                col-xs-5 col-xs-offset-2">
                <input type="text" ref="textInput" autoFocus
                       placeholder="Enter your symptoms"/>
              </div>
              <div className="col-md-2 col-xs-3 col-sm-3">
                <button type="submit">
                  <p>Search</p>
                </button>
              </div>
            </div>
          </form>

          {this.state.illnessSearched ?
           <Illness symptoms={this.state.symptoms}/> : null
          }

        </div>
      </div>
    );
  }
}

export default Diagnosis;