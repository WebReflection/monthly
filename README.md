# monthly [![Build Status](https://travis-ci.com/WebReflection/monthly.svg?branch=master)](https://travis-ci.org/WebReflection/monthly) [![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

A simplified way to show a calendar month in any console.

### API

The exported module is a function that accepts an object with the following properties:

  * `date`: the mandatory date object to use in order to display the month
  * `startDay`: the optional day of the week to use as starting day, by default it's `1` (Monday)
  * `freeDay`: one or more optional days of the week to consider free, by default `[0, 6]` (Sunday, Saturday)
  * `locale`: the optional locale to use, by default `en`
  * `table`: an optional boolean value to indicate the layout should be a proper table, by default it's `false`
  * `highlight`: an optional day of the month, eventually as list, to highlight. By default it's an empty list.
  * `blink`: an optional day of the month, eventually as list, to show blinking, where possible. By default it's an empty list
  * `bold`: an optional day of the month, eventually as list, to show as bold, where possible. By default it's an empty list
  * `dim`: an optional day of the month, eventually as list, to show dimmed, where possible. By default it's an empty list
  * `underline`: an optional day of the month, eventually as list, to show underlined, where possible. By default it's an empty list


#### About Days

The `date.getDay()` method returns `0` for _Sunday_, `1` for _Monday_, and all other days 'till `6` for _Saturday_.

Both `startDay` and `freeDay` use this numeric convention for days of the week, but every other property uses the actual day of the month, which is never `0` or greater than `31`.


### Usage

```js
// import monthly from 'monthly';
// or ...
var monthly = require('monthly');

var rows = monthly({
  date: new Date,
  startDay: 1,
  freeDay: [0, 6],
  locale: 'en',
  highlight: [3, 9, 11, 20],
  blink: 9,
  bold: 10,
  dim: 28,
  underline: 12,
  table: false  // it's the default anyway
});

console.log(rows.join('\n'));
```

Please note the function returns an array, so that it's possible to stack more months per row as shown via `npm test`.
