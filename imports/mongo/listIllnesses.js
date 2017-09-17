
/*
   Insert into database:
   $ meteor mongo
   $
*/

db.illnesses.insert({ name: "First illness", link: "#", createdAt: new Date() });
db.illnesses.insert({ name: "Second illness", link: "#", createdAt: new Date() });
db.illnesses.insert({ name: "Third illness", link: "#", createdAt: new Date() });
