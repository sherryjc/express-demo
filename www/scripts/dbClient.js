
// Scripting functions related to database operations.
// These are implemented as AJAX requests to various server URLs.

var url_base = 'http://127.0.0.1:3000';


var dbGetAllStoryTitles = function(cb) {
    $.ajax({
        url: url_base + '/db/getStoryTitles',
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
var dbGetStoryById = function(id) {

};

var dbSendStory = function(title, body, cb) {
        var story = {
            'title': title,
            'body': body
        };

        $.ajax({
            url: url_base + '/db/addStory',
            type: 'POST',
            data: JSON.stringify(story),
            contentType: 'application/json',
            success: function (data) {
                console.log('dbSendStory: POST Message sent. Data: ', data);
                cb();
            },
            error: function (data) {
                console.error('dbSendStory: Failed to send the POST message. Error: ', data);
            }
        });
};



