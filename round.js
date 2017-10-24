'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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


    var numberString = String(number);
    numberString = numberString.indexOf('.') !== -1 ? numberString : numberString + '.';

    var _numberString$split = numberString.split('.'),
        _numberString$split2 = _slicedToArray(_numberString$split, 2),
        originalInteger = _numberString$split2[0],
        fullDecimal = _numberString$split2[1];

    if (fullDecimal.length < precision + 1) {
        return number;
    }

    var unroundedDecimal = fullDecimal.slice(0, precision + 1);
    var leadingZeroes = countLeadingZeroes(unroundedDecimal);
    var roundingHint = unroundedDecimal.slice(-1);
    var decimalPortion = unroundedDecimal.slice(0, precision);

    switch (direction) {
        default:
        case DIRECTIONS.HALF_UP:
            {
                var integerPortion = void 0;
                if (+roundingHint >= 5) {
                    var decimalNumber = Number(decimalPortion) + 1;
                    if (decimalNumber - decimalNumber % 10 > decimalPortion - decimalPortion % 10) {
                        var decStart = 0;
                        var integerNumber = void 0;
                        if (leadingZeroes === 0) {
                            integerNumber = Number(originalInteger) + 1;
                            decStart = 1;
                        } else {
                            integerNumber = Number(originalInteger);
                            leadingZeroes--;
                        }
                        decimalPortion = String(decimalNumber).slice(decStart, precision).padStart(leadingZeroes, '0');
                        integerPortion = String(integerNumber);
                    } else {
                        decimalPortion = String(decimalNumber);
                        integerPortion = String(originalInteger);
                    }
                } else {
                    integerPortion = String(originalInteger);
                }
                return Number(integerPortion + '.' + decimalPortion);
            }
    }
}

function countLeadingZeroes(num) {
    var i = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = num[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var n = _step.value;

            if (n !== '0') {
                return i;
            }
            i++;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return i;
}

exports.round = round;
exports.simpleRound = simpleRound;
exports.DIRECTIONS = DIRECTIONS;