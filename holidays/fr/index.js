var utils = require('../utils');
var easter = utils.easter;

module.exports = {
  national: [
    '01-01',                    // New Year
    utils.after(1, easter),     // Easter Monday
    '05-01',                    // Labour Day
    '05-08',                    // Victory in Europe Day
    utils.ascension,
    utils.pentecostMonday,
    '07-14',                    // National Holiday
    '08-15',                    // Assumption of Mary
    '11-01',                    // All saints
    '11-11',                    // Armistice of 11 November 1918
    '12-25',                    // Christmas
  ],
  regional: [
    '04-27',                    // Abolition of slavery (in Mayotte region)
    utils.before(2, easter),    // Good Friday (in Alsace-Moselle region)
    '05-22',                    // Abolition of slavery (in Martinique region)
    '05-27',                    // Abolition of slavery (in Guadeloupe region)
    '05-27',                    // Abolition of slavery (in Saint-Martin region)
    '06-10',                    // Abolition of slavery (in Guyane region)
    '10-09',                    // Abolition of slavery (in Saint-Barthélemy region)
    '12-20',                    // Abolition of slavery (in La Réunion region)
    '12-26',                    // Boxing Day (in Alsace-Moselle region)
  ]
};
