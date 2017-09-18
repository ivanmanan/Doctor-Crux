import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Symptoms from './Symptoms';

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
      <div className="diagnosis">
        <div className="row text-center">
          <h1>What is your illness?</h1>
        </div>
        <div className="row">
          <form className="symptoms"
                onSubmit={this.handleSubmitSymptoms.bind(this)}>
            <div className="row">
              <div className="col-md-4 col-md-offset-3
                              col-sm-5 col-sm-offset-2
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
           <Symptoms symptoms={this.state.symptoms}/> : null
          }

        </div>
      </div>
    );
  }
}

export default Diagnosis;

/*
   TO-DO:
   Need to display searched symptoms Component

   AND make a function that processes and filters through the symptoms
   then displays the Encyclopedia tags

   TO-DO: Prevent NoSQL Injections with MongoDB - must verify symptoms
   does not have any damaging characters before querying database

   "Perhaps you should see a real doctor"
 */