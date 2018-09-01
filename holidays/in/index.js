var utils = require('../utils');
var easter = utils.easter;

module.exports = {
  national: [
    '01-26', // Republic day
    '08-15', // Independence day
    '10-02', // Gandhi Jayanti
    '12-25'  // Christmas
  ],
  regional: [
    // Secular holidays
    '01-01', // New Year
    '01-14', // Pongal / Uttarayan (Gujarat)
    '01-23', // Bose's Jayanti
    '02-19', // Shivaji's Jayanti (Maharashtra)
    '03-15', // Kanshi Ram's Jayanti (UP)
    '03-22', // Bihar day
    '03-30', // Rajasthan Day
    '04-01', // Odisha day
    '04-14', // Ambedkar's Jayanti
    '04-15', // New Year Assamese & Odia
    '05-01', // Labour Day / Maharashtra day / Gujarat day
    '05-09', // Rabindra Jayanti (WB)
    '05-16', // Annexation Day (Sikkim)
    '06-02', // Telangana Formation Day
    '06-15', // Maharana Pratap Jayanti (Rajasthan)
    '10-26', // Accession Day (J&K)
    '10-31', // Sardar Patel Jayanti (Gujarat)
    '11-01', // Foundation Day for AP, Haryana, MP, Kerala
    '12-07', // Armed Forces Flag Day

    // Christian holidays
    utils.before('Thu', easter), // Maundy Thursday
    utils.before('Fri', easter), // Good Friday
    easter,
    utils.pentecost,
    '07-03', // Feast of St. Thomas (Kerala)
    '09-05', // Fest of St. Theresa of Calcutta
    '08-05', // Feast of the Blessed Virgin
    '09-01', // All Saints Day (Karnataka)
    '09-02', // All Souls Day (Mizoram)
    '12-03', // Feast of St. Francis Xavier (Goa)
    '12-26', // Boxing Day (Telangana)
    '12-30' // Feast of Holy Family (Meghalaya)
  ]
};
