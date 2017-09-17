import React, { Component, PropTypes } from 'react';

class Encyclopedia extends Component {
  render() {
    return (
      <li>
        <a href={this.props.illness.link} target="_blank">
          {this.props.illness.name}
        </a>
      </li>
    );
  }
}

export default Encyclopedia;