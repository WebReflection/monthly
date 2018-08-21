var os = require('os');
var release = os.release;
os.release = function () {
  return '4.4.0-17134-Microsoft';
};

require('./cover.js');

delete require.cache[require.resolve('../cjs')];

os.release = release;

var monthly = require('../cjs');

var date = new Date;
date.setMonth(0);

var options = {
  startDay: 1,
  freeDay: [0, 6],
  locale: 'en',
  highlight: [3, 9, 11, 20],
  table: false,
  blink: 9,
  bold: 10,
  dim: 28,
  underline: 12
};

console.log('');
for (let i = 0; i < 3; i++) {
  var month = monthly(Object.assign({date}, options));
  for (let j = 0; j < 3; j++) {
    date.setMonth(date.getMonth() + 1);
    month.forEach(addLine, monthly(Object.assign({date}, options)));
  }
  date.setMonth(date.getMonth() + 1);
  console.log(month.join('\n'));
}
console.log('');

function addLine(line, i, arr) {
  arr[i] = line + '  ' + this[i];
}

require('./booking.js');
