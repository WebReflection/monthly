"use strict";

var path = require('path');

module.exports = function (locale, year) {
  var holidays = {
    national: [],
    regional: [],
    year: year || (new Date).getFullYear()
  };
  locale.toLowerCase().split(',').forEach(load, holidays);
  return holidays;
};

function load(lang) {
  try {
    var module = require(path.join('..', 'holidays', lang, 'index.js'));
    this.national.push.apply(
      this.national,
      module.national.map(addYear, this.year).filter(nulled)
    );
    this.regional.push.apply(
      this.regional,
      module.regional.map(addYear, this.year).filter(nulled)
    );
  } catch (notThereYet) {}
}

function addYear(mmdd) {
  return typeof mmdd === 'string' ?
          new Date(this + '-' + mmdd) :
          mmdd(+this);
}

function nulled(date) {
  return date != null;
}
