import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Diagnosis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      illnessSearched: false,
    };
    //this.handleSubmitSymptoms.bind(this);
  }

  // Handle Form Search
  handleSubmitSymptoms(event) {
    //event.preventDefault();
    const input = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    if (input === "") return;
    else {
      console.log(input);

      this.setState({
        illnessSearched: true,
      });
    }
  }


  render() {
    return (
      <div className="text-center">
        <div className="Diagnosis">
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

          {this.state.illnessSearched ? <h1>Hi</h1> : null}

        </div>
      </div>
    );
  }
}

export default Diagnosis;

/*
   onSubmit={this.handleSubmitSymptoms(this)}>
   TO-DO:
   Search symptoms
   Then display cards for each symptom --> this will be another component

   Create table with symptoms and map foreign keys to possible illnesses

   When retrieving from database, display list of possible illnesses and:
   Illness Name
   Illness Symptoms
   Treatment

   "Perhaps you should see a real doctor"
 */