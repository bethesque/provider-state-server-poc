var bodyParser = require('body-parser');
var express = require('express');
var q = require('q');

module.exports = function (providerStates) {
    var deferred = q.defer();

    var app = express();

    app.use(bodyParser.urlencoded({extended: false}));

    app.post('/set-up', function (request, response) {
        var setUpFn = providerStates[request.body.provider][request.body.provider_state];
        setUpFn(function () {
            response.end();
        });
    });

    var server = app.listen(3333, function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log('Pact Helper listening at http://%s:%s', host, port);
        deferred.resolve();
    });

    return deferred.promise;
};