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
            <h1 className="personal-heading">Personal Health</h1>
          </div>
        </div>

        <div className="row text-left">
          <div className="col-md-6 col-md-offset-1
                          col-sm-7 col-sm-offset-1
                          col-xs-7 col-xs-offset-1">
            <h1>Hello</h1>
          </div>

          <div className="col-md-4">
            <h1>Hello</h1>
          </div>

        </div>
      </div>
    );
  }
}

export default Personal;