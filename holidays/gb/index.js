var utils = require('../utils');
var easter = utils.easter;

module.exports = {
  national: [
    "01-01",
    utils.before(2, easter),
    easter,
    utils.after('Monday', '05-01'),
    utils.before('Monday', '05-31'),
    "12-25",
    "12-26"
  ],
  regional: [
    '01-02',
    '03-19',
    utils.after(1, easter),
    '07-12',
    utils.after('Monday', '08-01'),
    utils.before('Monday', '08-31'),
    '11-30'
  ]
};
