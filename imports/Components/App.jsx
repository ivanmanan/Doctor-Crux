// Home Interface
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Illnesses } from '../api/illness.js';

import Option from './Option';
import Encyclopedia from './Encyclopedia';

const element = (
  <h1>Hello world!</h1>
);

// App Component representing the whole app
class App extends Component {

  getOptions() {
    return [
      { _id: 1, section: 'Diagnosis' },
      { _id: 2, section: 'Encyclopedia' },
      { _id: 3, section: 'Personal' },
    ];
  }


  renderOptions() {
    return this.getOptions().map((option) => (
      <Option key={option._id} option={option}/>
    ));
  }

  // Render from database
  renderEncyclopedia() {
    return this.props.illnesses.map((illness) => (
      <Encyclopedia key={illness._id} illness={illness}/>
    ));
  }

  render() {
	  return (
      <div className="container">
        <header>
          <h1>Simple Doctor Crux</h1>
        </header>

        <nav className="navbar navbar-default navbar-static-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle"
                      data-toggle="collapse" data-target="#cruxNavBar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse" id="cruxNavBar">
              <ul className="nav navbar-nav" id="header-options">
                {this.renderOptions()}
              </ul>
            </div>
          </div>
        </nav>

        <div className="container" id="encyclopedia">
          {this.renderEncyclopedia()}
        </div>

      </div>
    );
  }
}

export default createContainer(() => {
  return {
    illnesses: Illnesses.find({}).fetch(),
  };
}, App);

/* TO-DO: Add a form so you can filter through illnesses in encyclopedia */


/* Based on what the user clicks on the navbar renders the component
   --> may be implemented with a switch statement
   It will be written below the nav tags

   must add onClick() event for each option to render proper containers
   Also must display which option is active/open right now
*/