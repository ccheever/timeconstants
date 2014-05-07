timetimeconstants
=============

Time timeconstants for JavaScript, ex. hour, minute, second, etc.

The following are available:
    yearApprox (= 365.25 days
    monthApprox (= 1/12th of a year)
    week
    day
    hour
    minute
    second
    ms
    

Ex:
## Usage

```js
var timeconstants = require('timeconstants');

var tenMilliseconds = 10 * timeconstants.ms;
var twoMinuteAndFiveSeconds = 2 * timeconstants.minute + 5 * timeconstants.second;
var twelveHours = 12 * timeconstants.hour;
var oneDay = timeconstants.day;
var oneWeek = timeconstants.week;

// = 1/12th of a year
timeconstants.monthApprox;

// = 365.25 days
timeconstants.yearApprox;
```

