import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Layout from '../imports/Components/Layout';
import App from '../imports/Components/App';

Meteor.startup(() => {
  render(
    <div>
      <Layout/>
      <App/>
    </div>,
    document.getElementById('root')
  );
});