var common = require('../common');

module.exports = {
  country: [
    "01-01",
    "01-06",
    common.easter, // Wielkanoc
    common.easterMonday, // Poniedziałek Wielkanocny
    "05-01",
    "05-03",
    pentecost, // Zielone Świątki
    corpusChristi, // Boże Ciało
    "08-15",
    "11-01",
    "11-11",
    "12-25",
    "12-26"
  ],
  region: []
};

function pentecost() {
  var date = new Date(common.easter(Y).getTime());
  date.setDate(date.getDate() + 49);
  return date;
}

function corpusChristi() {
  var date = new Date(common.easter(Y).getTime());
  date.setDate(date.getDate() + 60);
  return date;
}
