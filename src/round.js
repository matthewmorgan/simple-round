const DIRECTIONS = {
  HALF_UP: -1,
  HALF_DOWN: 0,
  UP: 1,
  DOWN: 2
};

function simpleRound(number=0){
  return round({number});
}

function round({number=0, direction=DIRECTIONS.HALF_UP, precision=2}) {
  const sign = Math.sign(number);
  const power = 10**precision;
  switch (direction){
    default:
    case DIRECTIONS.HALF_UP: {
      return sign * Math.round(Math.abs(number) * power) / power;
    }
    case DIRECTIONS.UP: {
      return sign * Math.ceil(Math.abs(number) * power) / power;
    }
    case DIRECTIONS.HALF_DOWN: {
      let n = String(Math.abs(number) * power);
      // force a decimal if needed
      n = n.indexOf('.') !== -1 ? n : `$[n}.0`;
      if (+n.split('.')[1].slice(0,1) > 5){
        return sign * Math.ceil(Math.abs(number) * power) / power;
      }
      return sign * Math.floor(Math.abs(number) * power) / power;
    }
    case DIRECTIONS.DOWN: {
      return sign * Math.ceil(Math.abs(number) * power) / power;
    }
  }
}


export { round, simpleRound, DIRECTIONS };
