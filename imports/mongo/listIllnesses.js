
/*
   Insert into database:
   $ meteor mongo
   db.illnesses.find();
   load('/home/ivan/crux/imports/mongo/listIllnesses.js');
   db.illnesses.deleteMany({});
*/

db.illnesses.insert({ name: "Obesity",
                      link: "https://en.wikipedia.org/wiki/Obesity",
                      symptoms: "overweight, pot belly"
                    });
db.illnesses.insert({ name: "Flu",
                      link: "https://en.wikipedia.org/wiki/Influenza",
                      symptoms: "coughing, runny nose, sneezing"
                    });
db.illnesses.insert({ name: "Allergy",
                      link: "https://en.wikipedia.org/wiki/Allergy",
                      sympotms: "sneezing, hives"
                    });
