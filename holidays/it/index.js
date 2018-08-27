var utils = require('../utils');
var easter = utils.easter;

module.exports = {
  national: [
    "01-01",            // New Year
    "01-06",            // Epiphany
    easter,             // Pasqua
    utils.after(1, easter), // Pasquetta
    "04-25",            // End of WW2
    "05-01",            // Labour Day
    "06-02",            // Republic
    "08-15",            // Assumption of Mary
    "11-01",            // All saints
    "12-08",            // Immacolata Concezione
    "12-25",            // Christmas
    "12-26"             // St. Stefano
  ],
  regional: [
    "04-28",  // Sardinia
    "05-04",  // Ancona
    "06-24",  // Florence, Genoa, Turin
    "06-29",  // Rome
    "07-15",  // Palermo
    "09-19",  // Naples
    "10-04",  // Bologna
    "11-02",  // Trieste
    "12-06",  // Bari
    "12-07"   // Milan
  ]
};
