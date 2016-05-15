// Controller

// This is the glue between the events layer (view input) and the model data.

var updateStoryTitles = function() {
    dbGetAllStoryTitles(function (data){
        modelSetStoryList(data);
    });
};

var onSubmitStory = function() {

    var title = $('#inp-story-title').val();
    var content = $('#inp-story-body').val();

    if (title.length > 0 && content.length > 0) {
        modelAddStory(title, content, function(){
            // This callback will be called after the story has been sent.
            // Clear the input text fields.
            $('#inp-story-title').val("");
            $('#inp-story-body').val("");
        });
    }
};
