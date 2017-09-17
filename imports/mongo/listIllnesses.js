
/*
   Insert into database:
   $ meteor mongo
   mongo shell> db.illnesses.find();
   mongo shell> load('/home/ivan/crux/imports/mongo/listIllnesses.js');
*/

db.illnesses.insert({ name: "Obesity", link: "en.wikipedia.org/wiki/Obesity", createdAt: new Date() });
db.illnesses.insert({ name: "Second illness", link: "#", createdAt: new Date() });
db.illnesses.insert({ name: "Third illness", link: "#", createdAt: new Date() });
