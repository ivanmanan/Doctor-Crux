// Home Interface
import React, { Component } from 'react';

import Option from './Option';

const element = (
  <h1>Hello world!</h1>
);

// App Component representing the whole app
class App extends Component {

  getOptions() {
    return [
      { _id: 1, text: 'Diagnosis' },
      { _id: 2, text: 'Daily Disease' }, // This will be a daily random number generator indexing my database
      { _id: 3, text: 'Personal' },
    ];
  }


  renderOptions() {
    return this.getOptions().map((option) => (
      <Option key={option._id} option={option}/>
    ));
  }


  render() {
	  return (
      <div className="container">
        <header>
          <h1>Simple Doctor Crux</h1>
        </header>

        <nav className="navbar navbar-default navbar-static-top">
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav" id="header-options">
              {this.renderOptions()}
            </ul>
          </div>
        </nav>

      </div>
    );
  }
}
export default App;


/* Based on what the user clicks on the navbar renders the component
   --> may be implemented with a switch statement
   It will be written below the nav tags

   On hover at navbar: can make li className be active
*/