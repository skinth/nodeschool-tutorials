var _ = require('lodash');

var worker = function(args) {
    return _.sortBy(args, (item) => {return -item.quantity});
};

module.exports = worker;