var express = require('express');
var request = require('request');
var dbIfx = require('../server_impl/dbIfx');
var router = express.Router();


router.get('/getStoryTitles', function(req, res) {
    dbIfx.getStoryTitles(function(titles){
        console.log("In getStoryTitles callback");
        console.log(titles);
        res.send(titles);
    });
});

router.get('/getStoryById', function(req, res) {
    dbIfx.getStoryById(function(story){
        console.log("In getStoryById callback");
    });
});

router.post('/addStory', function(req, res) {
    var req_body = [];
    req.on('data', function(chunk) {
        req_body.push(chunk);
    });
    req.on('end', function() {
        var storyObj = JSON.parse(req_body);
        storyObj.origin = "User-submitted";
        dbIfx.addStory(storyObj, function(){
            console.log("In addStory callback");
        });
    });
});
module.exports = router;
