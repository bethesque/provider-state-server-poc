var childProcess = require('child_process');
var q = require('q');

module.exports = function () {
    var deferred = q.defer();

    childProcess.exec('bundle exec rake pact:verify:javascript', function (error, stdout) {
        console.log(stdout.toString());
        if (error) {
            deferred.reject(new Error('pact:verify failed: ' + error.message));
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise;
};