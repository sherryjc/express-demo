var fs = require('fs');

// This function is run outside the app to get an initial database in place.


var dbAllStories = [
    {
        'id': 1,
        'title': 'Data Security Breaches Up Worldwide, According to Expert',
        'origin': 'Reuters',
        'content': "According to Mr. Austin Powers, spokesman for the data security consulting firm 'Security \'r Us', " +
        "data breaches were up sharply in the first quarter of 2016. Mr. Powers blames the increase on a " +
        "'general lack of understanding of security in the software development community', and commented further that " +
        "there 'appears to be no hope of improvement in sight'."
    },
    {
        'id': 2,
        'origin': 'Wired',
        'title': 'Data Security Breaches Down Worldwide, According to Expert',
        'content': "According to Mr. Erasmus B. Dragon, spokesman for the data security consulting firm 'What, Me Worry?',\ " +
        "data breaches were down significantly in the first quarter of 2016. Mr. Dragon credits the increase to " +
        "'great inroads being made in the understanding of security in the software development community'."
    }
];

var dbPath = "./db.json";

var dbGen = function() {
    var dbJson = JSON.stringify(dbAllStories);
    fs.writeFile(dbPath, dbJson, function (err) {
        if (err) {
            console.log("Error writing file " + dbPath + " : " + err);
        }
        console.log("Done");
    });
};

dbGen();
