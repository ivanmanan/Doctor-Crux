import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

const element = (
  <h1>Hello world!</h1>
);

Meteor.startup(() => {
  render(
    element,
    document.getElementById('root')
  );
});