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
module.exports = router;
