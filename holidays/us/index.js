var utils = require('../utils');

var after = utils.after;
var closestWeekday = utils.closestWeekday;

module.exports = {
  national: [
    after('Monday', '01-01'),
    MartinLutherKingJr,
    utils.before('Monday', '05-31'),
    closestWeekday('07-04'),
    after('Monday', '09-01'),
    Thanksgiving,
    '12-25'
  ],
  regional: [
    Presidents,
    closestWeekday('04-16'),
    Columbus,
    closestWeekday('11-11'),
    dayAfterThanksgiving
  ]
};

function dayAfterThanksgiving(Y) {
  var date = Thanksgiving(Y);
  date.setDate(date.getDate() + 1);
  return date;
}

function Columbus(Y) {
  var date = after('Monday', '10-01')(Y);
  date.setDate(date.getDate() + 7);
  return date;
}

function MartinLutherKingJr(Y) {
  var date = after('Monday', '01-01')(Y);
  date.setDate(date.getDate() + 7 * 2);
  return date;
}

function Presidents(Y) {
  var date = after('Monday', '02-01')(Y);
  date.setDate(date.getDate() + 7 * 2);
  return date;
}

function Thanksgiving(Y) {
  var date = after('Thursday', '11-01')(Y);
  date.setDate(date.getDate() + 7 * 3);
  return date;
}
