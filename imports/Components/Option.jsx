import React, { Component } from 'react';

// Option Componeent
class Option extends Component {
  // Construct initial state
  constructor(props) {
    super(props);
    if (this.props.option.selection === "Diagnosis")
      this.state = {isToggleOn: true}
    else
      this.state = {isToggleOn: false}
  }

  // Handles button click events
  handleClick() {
    console.log("Hello!");
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.option.section}
      </button>
    );
  }
}

export default Option;