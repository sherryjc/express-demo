
// Scripting functions related to database queries

// These will be implemented as requests on various server routes.

// For now, we supply some hard-wired local data

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
        'origin:': 'Wired',
        'title': 'Data Security Breaches Down Worldwide, According to Expert',
        'content': "According to Mr. Erasmus B. Dragon, spokesman for the data security consulting firm 'What, Me Worry?',\ " +
        "data breaches were down significantly in the first quarter of 2016. Mr. Dragon credits the increase to " +
        "'great inroads being made in the understanding of security in the software development community'."
    }
];



var getAllStoryTitles = function() {
    var retArray = [];

    for (var key in dbAllStories) {
        var outObj = {};
        outObj.id = dbAllStories[key].id;
        outObj.title = dbAllStories[key].title;
        retArray.push(outObj);
    }
    return retArray;
};

var getStoryById = function() {

};
