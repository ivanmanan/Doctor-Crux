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

/*
   Insert into database:
   $ meteor mongo
   db.illnesses.insert({ name: "First illness", link: "#", createdAt: new Date() });
*/