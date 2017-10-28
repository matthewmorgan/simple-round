const DIRECTIONS = {
  HALF_UP:   -1,
  HALF_DOWN: 0,
  UP:        1,
  DOWN:      2
};

function fixedSimpleRound(number){
  return simpleRound(number).toFixed(2);
}

function simpleRound(number = 0) {
  return round({number});
}

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
    padString = String(padString || ' ');
    if (this.length > targetLength) {
      return String(this);
    }
    else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}


function fixedRound({number, direction, precision=2}){
  return round({number, direction, precision}).toFixed(precision);
}

function round({number = 0, direction = DIRECTIONS.HALF_UP, precision = 2}) {

  doValidationCheck({number, direction, precision});

  let numberString = String(number);
  let sign = Math.sign(number);
  numberString = numberString.indexOf('.') !== -1 ? numberString : `${numberString}.`;
  const [originalInteger, fullDecimal] = numberString.split('.');
  if (fullDecimal.length < precision + 1) {
    return number;
  }

  const unroundedDecimal = fullDecimal.slice(0, precision + 1);
  let leadingZeroes = countLeadingZeroes(unroundedDecimal);
  let roundingHint = unroundedDecimal.slice(-1);
  let decimalPortion = unroundedDecimal.slice(0, Math.max(precision, 1));

  switch (direction) {
    default:
    case DIRECTIONS.HALF_UP: {
      let integerPortion;
      let hintCheck = direction === DIRECTIONS.HALF_DOWN ? (hint) => hint > 5 : (hint) => hint >= 5;
      if (hintCheck(+roundingHint)) {
        let decimalNumber;
        if (precision === 0){
          decimalNumber = Number(decimalPortion) + 10;
        } else {
          decimalNumber = Number(decimalPortion) + 1;
        }
        if (decimalNumber - decimalNumber % 10 > decimalPortion - decimalPortion % 10) {
          let decStart = 0;
          let integerNumber;
          if (leadingZeroes === 0) {
            integerNumber = Number(originalInteger) + sign;
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
        if (precision === 0){
          decimalPortion = 0;
        }
      }
      const result = Number(`${integerPortion}.${decimalPortion}`);
      if (Math.sign(result) !== sign){
          return -result;
      }
      return result;
    }

    case DIRECTIONS.DOWN: {
      let power = 10 ** precision;
      let sign = Math.sign(number);
      return Math.floor(Math.abs(number) * power) / power * sign;
    }

    case DIRECTIONS.UP: {
      let power = 10 ** precision;
      let sign = Math.sign(number);
      return Math.ceil(Math.abs(number) * power) / power * sign;
    }
  }
}

function countLeadingZeroes(num) {
  let i = 0;
  for (let n of num) {
    if (n !== '0') {
      return i;
    }
    i++;
  }
  return i;
}

function doValidationCheck({number, precision, direction}){
  if (typeof number !== 'number'){
    throw new Error('number must be of type Number!');
  }

  const contained = Object.keys(DIRECTIONS)
      .map(key => DIRECTIONS[key] === direction)
      .filter(el => el === true);
  if (!contained.length){
    throw new Error('direction must be one of UP, DOWN, HALF_UP, or HALF_DOWN');
  }

  if (precision < 0 || parseInt(precision) !== precision){
    throw new Error('precision must be an integer 0 or greater')
  }
}


export {round, fixedSimpleRound, fixedRound, simpleRound, DIRECTIONS};
