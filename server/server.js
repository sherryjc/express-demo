
var favicon = require('serve-favicon');
var db = require('./routes/db');
var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use('/', express.static(__dirname + '/../www'));
app.use(favicon(__dirname + '/../www/images/favicon.ico'));

// Route categories
//  /db -- database requests
app.use('/db', db);

var server = app.listen(app.get('port'), function() {
    console.log('Server listening on port ' + server.address().port);
});
