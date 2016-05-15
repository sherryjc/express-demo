var fs = require('fs');

// Database interface file

// The intent of this interface is to allow for easy swapping of which backend database is in use.

var dbIfx = {

    'getStoryTitles': function(cb) {
        dbGet(function (db) {
            var retArray = [];

            for (var key in db) {
                var outObj = {};
                outObj.id = db[key].id;
                outObj.title = db[key].title;
                outObj.origin = db[key].origin;
                retArray.push(outObj);
            }
            return cb(retArray);
        });
    },
    'getStoryById': function(cb) {
        var storyObj = {};
        cb(storyObj);
    }
};

module.exports = dbIfx;

// Todo: Encapsulate the following in a private structure

var bDbInit = false;
var dbPath = "./db/db.json";
var dbWholeDb = {};
var dbGet = function(cb) {
    if (bDbInit === true) {
        cb(dbWholeDb);
    }
    bDbInit = true;
    fs.readFile(dbPath, function (err, json_data) {
        if (err) {
            console.log("Error reading file " + dbPath + " : " + err);
            cb(null);
        } else {
            dbWholeDb = JSON.parse(json_data);
            cb(dbWholeDb);
        }
    });
};
