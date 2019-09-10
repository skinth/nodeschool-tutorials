var _ = require('lodash');

var worker = function(args) {
    return _.filter(args, {active: true});
}

module.exports = worker;