import { Meteor } from 'meteor/meteor';
import './imports/api/illness.js';
import { Illnesses } from './imports/api/illness.js';


Meteor.startup(() => {
  // console.log(Illnesses.find().fetch());
  // Meteor.publish("search", function(searchValue) {
  // if (!searchValue) {
  //   return Illnesses.find({});
  // }
  // return Illnesses.find(
  //   { $text: {$search: searchValue} }
  // );
});
