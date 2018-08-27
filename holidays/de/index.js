var utils = require('../utils');
var easter = utils.easter;

module.exports = {
  national: [
    '01-01',
    utils.before(2, easter),
    utils.after(1, easter),
    '05-01',
    utils.ascension,
    utils.pentecostMonday,
    '10-03',
    '12-25',
    '12-26'
  ],
  regional: [
    '01-06',
    utils.corpusChristi,
    '08-15',
    '10-22',
    '10-31',
    '11-01',
    '11-21'
  ]
};
