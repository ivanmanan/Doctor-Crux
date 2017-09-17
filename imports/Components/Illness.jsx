import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Illness extends Component {
  render() {
    return (
      <h1>{this.props.symptoms}</h1>
    );
  }
}

export default Illness;

/*
   TO-DO:
   Search symptoms - use the symptoms prop I passed down

   Then display cards for each symptom --> this will be another component

   Create table with symptoms and map foreign keys to possible illnesses

   When retrieving from database, display list of possible illnesses and:
   Illness Name
   Illness Symptoms
   Treatment

   "Perhaps you should see a real doctor"

   TO-DO: Prevent NoSQL Injections with MongoDB - must verify symptoms
   does not have any damaging characters before querying database
 */