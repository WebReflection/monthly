module.exports = {
  after: after,
  ascension: ascension,
  before: before,
  closestWeekday: closestWeekday,
  corpusChristi: corpusChristi,
  easter: easter,
  pentecost: pentecost,
  pentecostMonday: pentecostMonday
};

function after(day, fn) {
  return _find(day, fn, 1);
}

function ascension(Y) {
  var date = easter(Y);
  date.setDate(date.getDate() + 39);
  return date;
}

function before(day, fn) {
  return _find(day, fn, -1);
}

function closestWeekday(mmdd) {
  return function (Y) {
    var date = new Date(Y + '-' + mmdd);
    if (date.getDay() === 6)
      date.setDate(date.getDate() - 1);
    else if (date.getDay() === 0)
      date.setDate(date.getDate() + 1);
    return date;
  };
}

function corpusChristi(Y) {
  var date = easter(Y);
  date.setDate(date.getDate() + 7 * 8);
  return _find('Thu', date, 1)(Y);
}

function easter(Y) {
  var date = new Date(Y + '-04-01');
  var a = Y % 19;
  var b = Y % 4;
  var c = Y % 7;
  var age = _getAge(Y);
  var d = (19 * a + age.m) % 30;
  var e = (2 * b + 4 * c + 6 * d + age.n) % 7;
  if (d + e < 10) {
    date.setMonth(date.getMonth() - 1);
    date.setDate(d + e + 22);
  } else {
    date.setDate(d + e - 9);
  }
  var day = date.getDate();
  switch (day) {
    case 26:
      date.setDate(19);
      break;
    case day === 15 && d === 28 && e === 6 && a > 10:
      date.setDate(18);
      break;
  }
  return date;
}

function pentecost(Y) {
  var date = pentecostMonday(Y);
  date.setDate(date.getDate() - 1);
  return date;
}

function pentecostMonday(Y) {
  var date = easter(Y);
  date.setDate(date.getDate() + 7 * 7);
  return _find('Mon', date, 1)(Y);
}

// private utilities

// some magic signature here
// if day is a number, it's added to the date
// if day is a day of the week (English only)
// it's found while incrementing.
// if fn is a function, is invoked as fn(YYYY)
// if if is a "MM-DD" string, is created as "YYYY-MM-DD"
// if fn is a date, is used as it is
function _find(day, fn, increment) {
  return function (Y) {
    var type = typeof fn;
    var date = type === 'function' ?
      fn(Y) :
      (type === 'object' ?
        fn : new Date(Y + '-' + fn));
    if (typeof day === 'number')
      date.setDate(date.getDate() + (day * increment));
    else {
      var dow = _getName(day);
      while (date.getDay() !== dow)
        date.setDate(date.getDate() + increment);
    }
    return date;
  };
}

// https://en.wikipedia.org/wiki/Computus#Gauss's_Easter_algorithm
function _getAge(Y) {
  switch (true) {
    case Y < 1700: return { m: 22, n: 2 };
    case Y < 1800: return { m: 23, n: 3 };
    case Y < 1900: return { m: 23, n: 4 };
    case Y < 2100: return { m: 24, n: 5 };
    case Y < 2200: return { m: 24, n: 6 };
    case Y < 2300: return { m: 25, n: 0 };
    case Y < 2400: return { m: 26, n: 1 };
    case Y < 2500: return { m: 25, n: 1 };
  }
}

function _getName(day) {
  switch (day) {
    case 'Sun':
    case 'Sunday': return 0;
    case 'Mon':
    case 'Monday': return 1;
    case 'Tue':
    case 'Tuesday': return 2;
    case 'Wed':
    case 'Wednesday': return 3;
    case 'Thu':
    case 'Thursday': return 4;
    case 'Fri':
    case 'Friday': return 5;
    case 'Sat':
    case 'Saturday': return 6;
  }
  return day;
}
