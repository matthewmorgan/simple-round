"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DIRECTIONS = {
  HALF_UP: -1,
  HALF_DOWN: 0,
  UP: 1,
  DOWN: 2
};

function round(_ref) {
  var _ref$number = _ref.number,
      number = _ref$number === undefined ? 0 : _ref$number,
      _ref$direction = _ref.direction,
      direction = _ref$direction === undefined ? DIRECTIONS.HALF_UP : _ref$direction,
      _ref$precision = _ref.precision,
      precision = _ref$precision === undefined ? 2 : _ref$precision;

  var sign = Math.sign(number);
  var numberString = (Math.abs(number) * Math.pow(10, precision)).toFixed(1);
  switch (direction) {
    default:
    case DIRECTIONS.HALF_UP:
      {
        var roundingDigit = Number(numberString.slice(-1));
        if (roundingDigit < 5) {
          return Math.floor(+numberString) / Math.pow(10, precision) * sign;
        } else {
          return Math.floor(+numberString + 1) / Math.pow(10, precision) * sign;
        }
      }
  }
}

exports.round = round;
exports.DIRECTIONS = DIRECTIONS;