import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Personal extends Component {

  render() {
    return (
      <div className="personal">
        <div className="row text-left">
          <div className="col-md-6 col-md-offset-1
            col-sm-9 col-sm-offset-1
            col-xs-9 col-xs-offset-1">
            <h1>Personal Health</h1>
          </div>
        </div>
        <hr/>

        <div className="row text-left">
          <div className="col-md-6 col-md-offset-1
            col-sm-9 col-sm-offset-1
            col-xs-9 col-xs-offset-1">
            <h2>Body Mass Index</h2>
          </div>
        </div>

        <div className="row text-left">
          <div className="col-md-10 col-md-offset-1
            col-sm-10 col-sm-offset-1
            col-xs-10 col-xs-offset-1">
            <p>BMI is the measure of body fat
              based on weight in relation to height.
            </p>
          </div>
        </div>
        <hr/>

        <div className="row">
          <div className="col-md-5 col-md-offset-1
            col-sm-5 col-sm-offset-1
            col-xs-5 col-xs-offset-1">
            <h2 id="bmi-calculator">BMI Calculator</h2>
          </div>
          <div className="col-md-6
            col-sm-6
            col-xs-5">
            <img id="bmi-image" src="/images/bmi_scale.png"/>
          </div>
        </div>
        <hr/>
        <form className="bmi-form">
          <div className="row">
            <div className="col-md-3 col-md-offset-1
              col-sm-3 col-sm-offset-1
              col-xs-3 col-xs-offset-1">
              <h2>Height:</h2>
            </div>

            <div className="col-md-2
              col-sm-2
              col-xs-2 text-right">
              <p>Feet:</p>
            </div>
            <div className="col-md-2
              col-sm-2
              col-xs-2">
              <input/>
            </div>
            <div className="col-md-2
              col-sm-2
              col-xs-2 text-right">
              <p>Inches:</p>
            </div>
            <div className="col-md-2
              col-sm-2
              col-xs-2">
              <input/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-md-offset-1
              col-sm-3 col-sm-offset-1
              col-xs-3 col-xs-offset-1">
              <h2>Weight:</h2>
            </div>

            <div className="col-md-2
              col-sm-2
              col-xs-2 text-right">
              <p>Pounds:</p>
            </div>
            <div className="col-md-2
              col-sm-2
              col-xs-2">
              <input/>
            </div>
            <div className="col-md-3 col-md-offset-1
              col-sm-3 col-sm-offset-1
              col-xs-3 col-xs-offset-1 text-center">
              <button type="submit">
                <p>Get BMI</p>
              </button>
            </div>
          </div>
        </form>
        <hr/>
        <div className="row">
          <div className="col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
            <h2>Annual Routine Check-Up</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
            <p>
              You should always do a route check-up with your doctor.
              Talk about benefits of going.
              <br/>
              These are typical things to expect from a check-up.
            </p>
          </div>
        </div>

      </div>
    );
  }
}

export default Personal;

/*
   TO-DO: After BMI calculates, render a React component beneath BMI Calculator
   AND state whether you are underweight, normal, over, or obese
*/