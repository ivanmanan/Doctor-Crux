import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Diagnosis extends Component {
  // Handle Form Search
  handleSubmitSymptoms(event) {
    //event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
  }


  render() {
    return (
      <div className="text-center">
        <div className="Diagnosis">
          <h1>What is your illness?</h1>
          <form className="symptoms" onSubmit={this.handleSubmitSymptoms(this)}>
            <input type="text" ref="textInput" placeholder="Enter your symptoms"/>
          </form>

        </div>
      </div>
    );
  }
}

export default Diagnosis;

/*
   TO-DO:
   Search symptoms
   Then display cards for each symptom

   Create table with symptoms and map foreign keys to possible illnesses

   When retrieving from database, display list of possible illnesses and:
   Illness Name
   Illness Symptoms
   Treatment

   "Perhaps you should see a real doctor"
*/