import { Mongo } from 'meteor/mongo';
import { Index, MinimongoEngine } from 'meteor/easy:search'

export const Illnesses = new Mongo.Collection('illnesses');

export const IllnessesIndex = new Index({
  collection: Illnesses,
  fields: ['symptoms', 'name'],
  engine: new MinimongoEngine(),
});