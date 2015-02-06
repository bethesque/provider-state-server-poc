var extractProviderStates = require('./extract-provider-states');
var startServer = require('./start-server');
var runRubyVerify = require('./run-ruby-verify');

var providerStates = {};

module.exports = {
    providerStatesFor: function (consumer, providerStatesFn) {
        providerStates[consumer] = extractProviderStates(providerStatesFn);
    },
    verify: function () {
        startServer(providerStates)
            .then(runRubyVerify)
            .then(process.exit)
            .done();
    }
};