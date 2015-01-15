var request = require('request');
var pact = require('../pact-provider-dsl');

var changeState = function (status, response, callback) {
    var requestOptions = {
        body: {
            status: status,
            response: response
        },
        json: true,
        method: 'POST',
        url: 'http://localhost:8080/dodgy-backdoor/control-what-mary-does'
    };

    request(requestOptions, callback);
};

pact.providerStatesFor('Zoo App', function () {
    this.providerState('there is an alligator named Mary', function () {
        this.setUp(function (done) {
            changeState(200, {name: 'Mary'}, done);
        });
    });

    this.providerState('there is not an alligator named Mary', function () {
        this.setUp(function (done) {
            changeState(404, {}, done);
        });
    });

    this.providerState('an error occurs retrieving an alligator', function () {
        this.setUp(function (done) {
            changeState(500, {error: 'Argh!!!'}, done);
        });
    });
});

pact.verify();