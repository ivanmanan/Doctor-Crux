import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Symptoms extends Component {
  render() {
    return (
      <div className="symptom-inputs">
        <div className="row">
          <div className="col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
            <h1>{this.props.symptoms}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Symptoms;

/*
   TO-DO:
   Then display cards for each symptom --> this will be another component
 */