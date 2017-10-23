'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DIRECTIONS = {
  HALF_UP: -1,
  HALF_DOWN: 0,
  UP: 1,
  DOWN: 2
};

function simpleRound() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return round({ number: number });
}

function round(_ref) {
  var _ref$number = _ref.number,
      number = _ref$number === undefined ? 0 : _ref$number,
      _ref$direction = _ref.direction,
      direction = _ref$direction === undefined ? DIRECTIONS.HALF_UP : _ref$direction,
      _ref$precision = _ref.precision,
      precision = _ref$precision === undefined ? 2 : _ref$precision;

  var sign = Math.sign(number);
  var power = Math.pow(10, precision);
  switch (direction) {
    default:
    case DIRECTIONS.HALF_UP:
      {
        return sign * Math.round(Math.abs(number) * power) / power;
      }
    case DIRECTIONS.UP:
      {
        return sign * Math.ceil(Math.abs(number) * power) / power;
      }
    case DIRECTIONS.HALF_DOWN:
      {
        var n = String(Math.abs(number) * power);
        // force a decimal if needed
        n = n.indexOf('.') !== -1 ? n : '$[n}.0';
        if (+n.split('.')[1].slice(0, 1) > 5) {
          return sign * Math.ceil(Math.abs(number) * power) / power;
        }
        return sign * Math.floor(Math.abs(number) * power) / power;
      }
    case DIRECTIONS.DOWN:
      {
        return sign * Math.ceil(Math.abs(number) * power) / power;
      }
  }
}

exports.round = round;
exports.simpleRound = simpleRound;
exports.DIRECTIONS = DIRECTIONS;