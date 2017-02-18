var path = require('path');
var express = require('express');
var config = require('./public/js/configure');
var app = express();

app.set('port', process.env.PORT || 3300);
app.set('views', path.join(__dirname, '/views'));
app = config(app);

//app.get('/', function (req, res) {
//    res.send('Hello world');
// });

app.listen(app.get('port'), function () {  
    console.log('server is listening at: ' + app.get('port'));
});