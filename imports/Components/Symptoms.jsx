import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import Encyclopedia from './Encyclopedia';

import { Illnesses, IllnessesIndex } from '../api/illness.js';

class Symptoms extends Component {

  handleClearSymptoms() {
    return;
  }


  renderIllness() {
    // Splits the input string into an array of words
    var symptoms = this.props.symptoms.split(" ");
    // Must remove specail characters from 'symptoms' array - includes commas and numbers

    // Search for matching symptoms in database
    // Then spit out the illness names
    /* var illnessData= [];*/
    for (var i = 0; i != symptoms.length; i++) {
      /* illnessData.push(IllnessesIndex.search(symptoms[i]).fetch());*/
    }
    // when you type in 'sneezing', it gives two JSON objects into single array value

    // must stop duplicate illnesses from appearing!

    /* var tester = Illnesses.find({ symptoms: this.props.symptoms }).fetch();
     * console.log(tester[0]._id);*/

    /* console.log(illnessData[0]);
     * console.log(JSON.stringify(illnessData[0]));

     * var anotherTest = illnessData[0];
     * console.log("Below is what I want to see:");
     * console.log(anotherTest);
     * console.log(anotherTest._id);
     */

    /*
     * console.log(illnessData[0]._id);
     * console.log(illnessData[0].name);

     * var tester = illnessData[0];
     * console.log(tester);
     * console.log(tester.name);
     */

    // Need to create a for-loop of illnesses i want to return

    // seems like it is not friendly with arrays
    var illnessData = IllnessesIndex.search("overweight").fetch();



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