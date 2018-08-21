const monthly = require('../cjs');

const vacation = getVacationDates();
const date = new Date('2018-08-17');
const options = {
  date,
  startDay: 0,
  highlight: vacation,
  bold: date,
  underline: [13, date]
};

const calendar = monthly(options);

// use another date to avoid unnecessary highlights
options.date = new Date(date.getTime());
// be sure changing month won't do funny things
options.date.setDate(1);
// loop 'till the end of vacations is reached
while (true) {
  options.date.setMonth(options.date.getMonth() + 1);
  if (options.date.getTime() > vacation[vacation.length - 1].getTime())
    break;
  calendar.forEach(
    function (line, i, arr) {
      arr[i] = line + '  ' + this[i];
    },
    monthly(options)
  );
}

console.assert(calendar.join('\n') === expectedOutput());
console.log(calendar.join('\n'));

function getVacationDates() {
  const days = [];
  const startDay = new Date('2018-08-27');
  const endDay = new Date('2018-09-07');
  while(startDay.getTime() <= endDay.getTime()) {
    days.push(new Date(startDay.getTime()));
    startDay.setDate(startDay.getDate() + 1);
  }
  return days;
}

function expectedOutput() {
  return "\u001b[7m       August       \u001b[0m  \u001b[7m     September      \u001b[0m\n\u001b[2mSu\u001b[0m \u001b[2mMo\u001b[0m \u001b[2mTu\u001b[0m \u001b[2mWe\u001b[0m \u001b[2mTh\u001b[0m \u001b[2mFr\u001b[0m \u001b[2mSa\u001b[0m  \u001b[2mSu\u001b[0m \u001b[2mMo\u001b[0m \u001b[2mTu\u001b[0m \u001b[2mWe\u001b[0m \u001b[2mTh\u001b[0m \u001b[2mFr\u001b[0m \u001b[2mSa\u001b[0m\n          1  2  3 \u001b[2m 4\u001b[0m                    \u001b[7m\u001b[2m 1\u001b[0m\u001b[0m\n\u001b[2m 5\u001b[0m  6  7  8  9 10 \u001b[2m11\u001b[0m  \u001b[7m\u001b[2m 2\u001b[0m\u001b[0m \u001b[7m 3\u001b[0m \u001b[7m 4\u001b[0m \u001b[7m 5\u001b[0m \u001b[7m 6\u001b[0m \u001b[7m 7\u001b[0m \u001b[2m 8\u001b[0m\n\u001b[2m12\u001b[0m \u001b[4m13\u001b[0m 14 15 16 \u001b[4m\u001b[1m17\u001b[0m\u001b[0m \u001b[2m18\u001b[0m  \u001b[2m 9\u001b[0m 10 11 12 \u001b[4m13\u001b[0m 14 \u001b[2m15\u001b[0m\n\u001b[2m19\u001b[0m 20 21 22 23 24 \u001b[2m25\u001b[0m  \u001b[2m16\u001b[0m 17 18 19 20 21 \u001b[2m22\u001b[0m\n\u001b[2m26\u001b[0m \u001b[7m27\u001b[0m \u001b[7m28\u001b[0m \u001b[7m29\u001b[0m \u001b[7m30\u001b[0m \u001b[7m31\u001b[0m     \u001b[2m23\u001b[0m 24 25 26 27 28 \u001b[2m29\u001b[0m\n                      \u001b[2m30\u001b[0m                  ";
}
