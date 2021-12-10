const moment = require("moment");
moment().format();

module.exports = (value) => {
  const dateObject = moment(value).subtract(14, "days");

  return `${dateObject.format("ll")}`;
};
