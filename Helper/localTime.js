const moment = require("moment");

function loaclTime(date) {
  return moment.parseZone(date).local().format("LLL");
}

module.exports = loaclTime;
