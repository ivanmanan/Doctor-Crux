import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import Encyclopedia from './Encyclopedia';

import { Illnesses } from '../api/illness.js';

class Symptoms extends Component {

  handleClearSymptoms() {
    return;
  }


  renderIllness() {
    // Splits the input string into an array of words
    var symptoms = this.props.symptoms.split(" ");

    // Search for matching symptoms in database
    // Then spit out the illness names

    // Need to be able to query single words in the database for symptoms attribute
    for (var i = 0; i != symptoms.length; i++) {
      /* console.log(Illnesses.find({ symptoms: symptoms[i] }).fetch());*/
    }

    // need to do the return as an if-statement else there will be console errors
    /* var illnessData = Illnesses.find({ symptoms: this.props.symptoms }).fetch();*/
    // may want to create a for-loop of illnesses i want to return

    // SOLUTION: Must use Meteor.subscribe method
    var illnessData = Illnesses.find({ $text: { $search: symptoms[0] } }, { sort: { name: 1 } }).fetch();
    return (
      <Encyclopedia key={illnessData[0]._id} illness={illnessData[0]}/>
    );
  }

  render() {
    return (
      <div className="symptom">
        <br/>
        <div className="row">
          <div className="col-md-3 col-sm-5 col-xs-4
            col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
            <h1>Symptoms</h1>
          </div>
          <div className="col-md-3 col-sm-5 col-xs-5">
            <button onClick={this.handleClearSymptoms}>
              <p>Clear Symptoms</p>
            </button>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
            <h2>{this.props.symptoms}</h2>
          </div>
        </div>
        <hr/>

        {this.renderIllness()}
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    illnesses: Illnesses.find({}, { sort: { name: 1 } }).fetch(),
  };
}, Symptoms);
/*
   TO-DO:
   Need to perofrm queries on database WHERE you search for symptoms

   Future:
   Enforce ability to 'X' out each symptom
 */