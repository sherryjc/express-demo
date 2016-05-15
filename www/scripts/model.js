
// Model data

// Set the available list of titles (currently not cached in the model)
// and render the titles in the view layer.
var modelSetStoryList = function(arrTitles) {
    displayStoryTitles(arrTitles);
};

var modelAddStory = function(title, body, cb) {
    dbSendStory(title, body, cb);
};
