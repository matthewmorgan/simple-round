const DIRECTIONS = {
  HALF_UP: -1,
  HALF_DOWN: 0,
  UP: 1,
  DOWN: 2
};

function round({number=0, direction=DIRECTIONS.HALF_UP, precision=2}) {
  const sign = Math.sign(number);
  const numberString = (Math.abs(number)*(10**precision)).toFixed(1);
  switch (direction){
    default:
    case DIRECTIONS.HALF_UP: {
      const roundingDigit = Number(numberString.slice(-1));
      if (roundingDigit < 5){
        return Math.floor(+numberString) / 10**precision * sign;
      } else {
        return Math.floor(+numberString + 1) / 10**precision * sign;
      }
    }
  }
}

export { round, DIRECTIONS };
