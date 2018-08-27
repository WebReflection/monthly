// A holidays file should be named index.js
// It should be inside a folder named after
// its ISO 3166 country name.
// As example, Italian holidays would be saved as:
// holidays/it/index.js
// Each holidays file can access to an utilities file.
// Such file is holidays/utils.js
// Example:
var utils = require('../utils');

// A holidays file must export a module
// as an object with at least two properties:
//  national: an Array of national dates as "MM-DD" or function
//  regional: an Array of regional dates as "MM-DD" or function
// If a value of either national or regional is a "MM-DD" string
// the resulting date would be created as "YYYY-MM-DD".
// If a value is instead a function, it will be invoked
// through the full year as number.
// If the function returns null or undefined
// the holiday won't be shown / considered.
module.exports = {
  national: [
    "01-01",            // will be new Date("YYYY-01-01")
    function (YYYY) {   // will also be new Date("YYYY-01-01")
      return new Date(YYYY + '-01-01');
    }
  ],
  regional: [
    "12-31"             // same as national
  ]
};
