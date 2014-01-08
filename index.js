// Some useful constants for working with time in ms since 1970
c = {};
c.second = 1000;
c.minute = c.second * 60;
c.hour = c.minute * 60
c.day = c.hour * 24;
c.week = c.day * 7;
c.yearApprox = c.day * 365.25;
c.monthApprox = c.yearApprox / 12;
module.exports = c;
