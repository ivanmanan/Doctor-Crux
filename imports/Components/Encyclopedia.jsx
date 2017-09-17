import React, { Component } from 'react';

class Encyclopedia extends Component {

  render() {
    return (
      <div className="encyclopedia">
        <li>
          <a href={this.props.illness.link} target="_blank">
            {this.props.illness.name}
          </a>
        </li>
      </div>
    );
  }
}

export default Encyclopedia;

/* TO-DO: This needs a searchIllness form */