


var displayWelcomeView = function() {
    var $welcomeBody = $('<div id="welcome-body"><h1>Welcome to the Story Database</h1></div>');
    var $bodyText = $('<div id="welcome-body-text"></div>');
    var p1 = "You can search and view existing stories or create your own.";
    var p2 ="To list or search stories, see the options panel at right. To enter your own story, use the text area below.";
    var $bodyP1 = $('<p></p>');
    $bodyP1.text(p1);
    $bodyP1.appendTo($bodyText);
    var $bodyP2 = $('<p></p>');
    $bodyP2.text(p2);
    $bodyP2.appendTo($bodyText);
    $bodyText.appendTo($welcomeBody);

    $('#mainOutputArea').html($welcomeBody);
};

var displayStoryTitles = function(titleObjs) {

    var $storiesBody = $('<div id="stories-body"><h1>Available Stories:</h1></div>');
    var $storiesList = $('<ul id="stories-list"></ul>');
    $storiesList.appendTo($storiesBody);
    for (key in titleObjs) {
        $storyEntry = $('<li class="story-entry"></li>');
        $storyOrigin = $('<span class="story-origin"></span>');
        $storyOrigin.text('[' + titleObjs[key].origin + ']');
        $storyOrigin.appendTo($storyEntry);
        var titleId = titleObjs[key].id;
        $storyTitle = $('<span class="story-title"></span>');
        $storyTitle.attr('id', titleId);
        $storyTitle.text(titleObjs[key].title);
        $storyTitle.appendTo($storyEntry);
        $storyEntry.appendTo($storiesList);
        registerClickHandler($storyTitle);
    }

    $('#mainOutputArea').html($storiesBody);
};


var registerClickHandler = function($storyTitle) {
    $storyTitle.on('click', function () {
        var storyId = this.id;
        console.log("Clicked on story: " + this.id);
    });
};


// Display a story given its Id
var displayStory = function(id) {

};