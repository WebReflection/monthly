var path = require('path');
var holidays = path.join(__dirname, '..', 'holidays');
var year = (new Date).getFullYear();

require('fs').readdir(
  holidays,
  function (error, files) {
    files.forEach(function (lang) {
      var holiday = path.join(holidays, lang, 'index.js');
      var module = require(holiday);
      if (
        !module.country.every(validHoliday, year) ||
        !module.region.every(validHoliday, year)
      )
        throw new Error(lang + ' is not a valid holidays file.');
    });
  }
);

function validHoliday(date) {
  var result = typeof date === 'string' ?
                new Date(this + '-01-01') :
                date(+this);
  return result instanceof Date && !isNaN(result.getTime());
}
