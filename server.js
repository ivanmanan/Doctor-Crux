import { Meteor } from 'meteor/meteor';
import './imports/api/illness.js';
import { Illnesses } from './imports/api/illness.js';


Meteor.startup(() => {
  // console.log(Illnesses.find().fetch());
});
