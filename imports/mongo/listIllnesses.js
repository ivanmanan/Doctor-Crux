/*
   Show database:
   $ meteor mongo
   db.illnesses.find();
   load('/home/ivan/crux/imports/mongo/listIllnesses.js');
*/

db.illnesses.deleteMany({});
db.illnesses.insert({ name: "Obesity",
                      link: "https://en.wikipedia.org/wiki/Obesity",
                      symptoms: "overweight, pot belly",
                      summary: "Reaching beyond the overweight range of your BMI.",
                      treatment: "Exercise daily."
                    });
db.illnesses.insert({ name: "Flu",
                      link: "https://en.wikipedia.org/wiki/Influenza",
                      symptoms: "coughing, runny nose, sneezing",
                      summary: "A contagious viral infection of the respiratory passages causing fever or severe aching.",
                      treatment: "Rest, consume lots of fluids."
                    });
db.illnesses.insert({ name: "Allergy",
                      link: "https://en.wikipedia.org/wiki/Allergy",
                      symptoms: "sneezing, hives",
                      summary: "A damaging immune response by the body to a substance, especially pollen, fur, or a particular food, to which the body becomes hypersensitive.",
                      treatment: "Take off-the-counter allergy medications. Remove possible sources of allergies around you."
                    });

db.illnesses.createIndex({ "symptoms" : "text" });