import React, { Component, PropTypes } from 'react';

// Option Componeent
class Option extends Component {
  render() {
    return (
      <li>{this.props.option.text}</li>
    );
  }
}

export default Option;