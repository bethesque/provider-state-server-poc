module.exports = function (providerStatesFn) {
    var states = {};

    var providerStatesApi = {
        providerState: function (providerStateName, providerStateFn) {
            var providerStateApi = {
                setUp: function (setUpFn) {
                    states[providerStateName] = setUpFn;
                }
            };

            providerStateFn.apply(providerStateApi);
        }
    };

    providerStatesFn.apply(providerStatesApi);

    return states;
};