
var updateStoryTitles = function() {
    dbGetAllStoryTitles(function (data){
        modelSetStoryList(data);
    });
};

