var utils = require('../utils');

module.exports = {
  national: [
    utils.after('Monday', '01-01'),
    MartinLutherKingJr,
    utils.before('Monday', '05-31'),
    closeTo('07-04'),
    utils.after('Monday', '09-01'),
    Thanksgiving,
    '12-25'
  ],
  regional: [
    Presidents,
    closeTo('04-16'),
    Columbus,
    closeTo('11-11'),
    dayAfterThanksgiving
  ]
};

function dayAfterThanksgiving(Y) {
  var date = Thanksgiving(Y);
  date.setDate(date.getDate() + 1);
  return date;
}

function closeTo(mmdd) {
  return function (Y) {
    var date = new Date(Y + '-' + mmdd);
    if (date.getDay() === 6)
      date.setDate(date.getDate() - 1);
    else if (date.getDay() === 0)
      date.setDate(date.getDate() + 1);
    return date;
  };
}

function Columbus(Y) {
  var date = utils.after('Monday', '10-01')(Y);
  date.setDate(date.getDate() + 7);
  return date;
}

function MartinLutherKingJr(Y) {
  var date = utils.after('Monday', '01-01')(Y);
  date.setDate(date.getDate() + 7 * 2);
  return date;
}

function Presidents(Y) {
  var date = utils.after('Monday', '02-01')(Y);
  date.setDate(date.getDate() + 7 * 2);
  return date;
}

function Thanksgiving(Y) {
  var date = utils.after('Thursday', '11-01')(Y);
  date.setDate(date.getDate() + 7 * 3);
  return date;
}
