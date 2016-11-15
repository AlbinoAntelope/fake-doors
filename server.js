// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('views', process.cwd() + '/public/views');
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('index');
});
// about page 
app.get('/about', function(req, res) {
    res.render('about');
});

app.use(express.static(__dirname + '/public'));

app.listen(8080);
console.log('8080 is the magic port');