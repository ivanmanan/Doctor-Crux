import React, { Component } from 'react';

// Option Componeent
class Option extends Component {
  constructor(props) {
    super(props);
    this.handleOptions = this.handleOptions.bind(this);
    this.state = {
      activeFlag: "not-active",
    };
  }

  // Unhighlight other children except the current child ID
  unhighlightOtherChildren(id) {
    console.log(id);
  }

  // Callback function to Parent Component
  handleOptions(e) {
    e.preventDefault();
    this.setState({activeFlag: "active"});
    this.unhighlightOtherChildren(this.props.option._id);
    this.props.handleOptions(this.props.option.section);
  }

  render() {
    return (
      <li className={this.state.activeFlag}>
        <button onClick={this.handleOptions}>
          {this.props.option.section}
        </button>
      </li>
    );
  }
}

export default Option;


// Need to update other navbar Components
// Active button needs to remain highlighted while others are unhighlighted
// may need to run a function if other buttons have been selected
//https://stackoverflow.com/questions/36143767/react-js-communicating-between-sibling-components