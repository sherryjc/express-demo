
// Scripting functions related to database queries

// These will be implemented as requests on various server URLs.



var dbGetAllStoryTitles = function(cb) {
    var that = this;
    $.ajax({
        // This is the url you should use to communicate with the parse API server.
        url: 'http://127.0.0.1:3000/db/getStoryTitles',
        type: 'GET',
        data: {
            limit: 500
        },
        contentType: 'application/json',
        success: function (data) {
            cb(data);
        },
        error: function (err) {
            console.log("Error in ajax getStoryTitles: " + err);
        }
    });
}


// Get a story given a story id
// TODO: implement
var getStoryById = function(id) {

};


// Model for ajax post request to post a new story
// TODO - implement
/*
app.postAjax = function(cb, message) {
    $.ajax({
        // This is the url you should use to communicate with the parse API server.
        url: 'https://api.parse.com/1/classes/chatterbox',
        type: 'POST',
        data: JSON.stringify(message),
        contentType: 'application/json',
        success: function (data) {
            //debugger;
            console.log('chatterbox: POST Message sent. Data: ', data);
            cb(data);

        },
        error: function (data) {
            // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
            console.error('chatterbox: Failed to send the GET message. Error: ', data);
        }
    });
};

*/

