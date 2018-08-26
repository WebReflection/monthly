const monthly = require('../cjs');
const today = new Date;
today.setDate(1);
const yesterday = new Date(today.getTime());
yesterday.setMonth(yesterday.getMonth() - 1);

console.log(monthly({
  date: yesterday,
  dim: '2018-08-26',
  table: true,
  year: true
}).join('\n'));

console.log(monthly({
  date: today,
  table: true,
  year: true
}).join('\n'));
