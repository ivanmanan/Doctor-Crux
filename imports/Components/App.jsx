// Home Interface
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Illnesses } from '../api/illness.js';

import Option from './Option';
import Diagnosis from './Diagnosis';
import Encyclopedia from './Encyclopedia';
import Personal from './Personal';

// App Component representing the whole app
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: "Diagnosis", // Default should be Diagnosis
    };
    this.handleOptions = this.handleOptions.bind(this);
  }

  getOptions() {
    return [
      { _id: 1, section: 'Diagnosis' },
      { _id: 2, section: 'Encyclopedia' },
      { _id: 3, section: 'Personal' },
    ];
  }

  //  handleOptions(option, e) {
  handleOptions(option) {
    this.setState({
      optionSelected: option,
    });
  }

  renderOptions() {
    return this.getOptions().map((option) => (
      <Option key={option._id} option={option}
              handleOptions={this.handleOptions}/>
    ));
  }

  // Render Diagnosis Component
  renderDiagnosis() {
    return <Diagnosis/>;
  }

  // Render Encyclopedia from Database
  renderEncyclopedia() {
    return this.props.illnesses.map((illness) => (
      <Encyclopedia key={illness._id} illness={illness}/>
    ));
  }

  // Render Personal Component
  renderPersonal() {
    return <Personal/>;
  }

  // Render base on button clicks
  renderSelection() {
    if (this.state.optionSelected === "Diagnosis") {
      //this.unhighlightOtherChildren(id); // need to fix this
      return this.renderDiagnosis();
    }
    else if (this.state.optionSelected === "Encyclopedia")
      return this.renderEncyclopedia();
    else if (this.state.optionSelected === "Personal")
      return this.renderPersonal();
    else
      return this.renderDiagnosis();
  }

  render() {
	  return (
      <div className="container">
        <header>
          <h1>Doctor Crux</h1>
        </header>

        <nav className="navbar navbar-default navbar-static-top">
          <div className="container-fluid">
            <div className="navbar-right">
              <button type="button" className="pull-left navbar-toggle"
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

        {this.renderSelection()}

      </div>
    );
  }
}

export default createContainer(() => {
  return {
    illnesses: Illnesses.find({}, { sort: { name: 1 } }).fetch(),
  };
}, App);