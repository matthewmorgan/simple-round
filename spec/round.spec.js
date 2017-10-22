import {round, DIRECTIONS} from '../src/round';

describe('Round HALF_UP for positive numbers', ()=> {
  test('can round pi HALF_UP to 2 decimal places', ()=>{
    let number = 3.14159;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(3.14);
  });

  test('can round pi HALF_UP to 3 decimal places', ()=>{
    let number = 3.14159;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 3;
    expect(round({number, direction, precision})).toEqual(3.142);
  });
});

describe('Round HALF_UP for negative numbers', ()=> {
  test('can round -pi HALF_UP to 2 decimal places', ()=>{
    let number = -3.14159;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(-3.14);
  });

  test('can round -pi HALF_UP to 3 decimal places', ()=>{
    let number = -3.14159;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 3;
    expect(round({number, direction, precision})).toEqual(-3.142);
  });
});

describe('Round HALF_UP handles edge cases', ()=> {
  test('supplied precision is longer than number', ()=> {
    let number = 3.14159;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 10;
    expect(round({number, direction, precision})).toEqual(3.14159);
  });

  test('number is undefined', ()=> {
    let number;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 10;
    expect(round({number, direction, precision})).toEqual(0);
  });

  test('direction is out of range', ()=> {
    let number = 3.14159;
    let direction = 666;
    let precision = 3;
    expect(round({number, direction, precision})).toEqual(3.142);
  });
});




