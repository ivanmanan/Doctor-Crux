import React, { Component } from 'react';

class Encyclopedia extends Component {

  render() {
    return (
      <div className="encyclopedia">
        <li>
          <a href={this.props.illness.link} target="_blank">
            {this.props.illness.name}
          </a>
          <h2>Summary</h2>
          <p>
            {this.props.illness.summary}
          </p>
          <h2>Treatment</h2>
          <p>
            {this.props.illness.treatment}
          </p>
          <h2>Symptoms</h2>
          <p>
            {this.props.illness.symptoms}
          </p>
        </li>
      </div>
    );
  }
}

export default Encyclopedia;

/* TO-DO: This needs a searchIllness form

   Application will run very slow if I display all the illnesses at once
   Solution: simply have ABC selections

 */