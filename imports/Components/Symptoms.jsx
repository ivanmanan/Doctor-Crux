import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Symptoms extends Component {
  render() {
    return (
      <div className="symptom">
        <div className="row">
          <div className="col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
            <h1>Symptoms</h1>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
            <h2>{this.props.symptoms}</h2>
          </div>
        </div>
      <hr/>
      </div>
    );
  }
}

export default Symptoms;

/*
   TO-DO:
   Then display cards for each symptom --> this will be another component

   Enforce ability to 'X' out each symptom
 */