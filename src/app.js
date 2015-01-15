var bodyParser = require('body-parser');
var express = require('express');

var maryStatus = 418;
var maryResponse = {im: 'a teapot'};

var app = express();

app.use(bodyParser.json());

app.get('/alligators/Mary', function (request, response) {
    response.set('Content-Type', 'application/json; charset=utf-8');
    response.status(maryStatus).send(maryResponse);
});

app.post('/dodgy-backdoor/control-what-mary-does', function (request, response) {
    maryStatus = request.body.status;
    maryResponse = request.body.response;
    response.end();
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Animal service listening at http://%s:%s', host, port);
});