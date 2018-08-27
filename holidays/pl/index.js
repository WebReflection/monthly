var utils = require('../utils');
var easter = utils.easter;

module.exports = {
  national: [
    "01-01",
    "01-06",
    easter, // Wielkanoc
    utils.after(1, easter), // Poniedziałek Wielkanocny
    "05-01",
    "05-03",
    utils.pentecost, // Zielone Świątki
    utils.corpusChristi, // Boże Ciało
    "08-15",
    "11-01",
    "11-11",
    "12-25",
    "12-26"
  ],
  regional: []
};
