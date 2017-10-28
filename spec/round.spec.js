
import {round, fixedRound, fixedSimpleRound, simpleRound, DIRECTIONS} from '../src/round';

describe('Round HALF_UP for positive numbers', () => {
  test('can round pi HALF_UP to 2 decimal places', () => {
    let number = 3.14159;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(3.14);
  });

  test('can round pi HALF_UP to 3 decimal places', () => {
    let number = 3.14159;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 3;
    expect(round({number, direction, precision})).toEqual(3.142);
  });
});

describe('Round HALF_UP for negative numbers', () => {
  test('can round -pi HALF_UP to 2 decimal places', () => {
    let number = -3.14159;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(-3.14);
  });

  test('can round -pi HALF_UP to 3 decimal places', () => {
    let number = -3.14159;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 3;
    expect(round({number, direction, precision})).toEqual(-3.142);
  });
});

describe('Round HALF_UP handles edge cases', () => {
  test('supplied precision is longer than number', () => {
    let number = 3.14159;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 10;
    expect(round({number, direction, precision})).toEqual(3.14159);
  });

  test('number is undefined', () => {
    let number;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 10;
    expect(round({number, direction, precision})).toEqual(0);
  });

  test('direction is out of range', () => {
    let number = 3.14159;
    let direction = 666;
    let precision = 3;
    expect(() => round({number, direction, precision})).toThrow();
  });

  test('can correctly round a four', () => {
    let number = 3.14159;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 1;
    expect(round({number, direction, precision})).toEqual(3.1);
  });

  test('can correctly round a four when negative', () => {
    let number = -3.14159;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 1;
    expect(round({number, direction, precision})).toEqual(-3.1);
  });


  test('can correctly round a six', () => {
    let number = 1.23456;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 4;
    expect(round({number, direction, precision})).toEqual(1.2346);
  });

  test('can correctly round a six when negative', () => {
    let number = -1.23456;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 4;
    expect(round({number, direction, precision})).toEqual(-1.2346);
  });
});

describe('Round HALF_DOWN for positive numbers', () => {
  test('can round pi HALF_DOWN to 2 decimal places', () => {
    let number = 3.14159;
    let direction = DIRECTIONS.HALF_DOWN;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(3.14);
  });

  test('can round pi HALF_DOWN to 3 decimal places', () => {
    let number = 3.14159;
    let direction = DIRECTIONS.HALF_DOWN;
    let precision = 3;
    expect(round({number, direction, precision})).toEqual(3.141);
  });
});

describe('Round HALF_DOWN for negative numbers', () => {
  test('can round -pi HALF_DOWN to 2 decimal places', () => {
    let number = -3.14159;
    let direction = DIRECTIONS.HALF_DOWN;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(-3.14);
  });

  test('can round -pi HALF_DOWN to 3 decimal places', () => {
    let number = -3.14159;
    let direction = DIRECTIONS.HALF_DOWN;
    let precision = 3;
    expect(round({number, direction, precision})).toEqual(-3.141);
  });
});

describe('Round HALF_DOWN handles edge cases', () => {
  test('supplied precision is longer than number', () => {
    let number = 3.14159;
    let direction = DIRECTIONS.HALF_DOWN;
    let precision = 10;
    expect(round({number, direction, precision})).toEqual(3.14159);
  });

  test('number is undefined', () => {
    let number;
    let direction = DIRECTIONS.HALF_DOWN;
    let precision = 10;
    expect(round({number, direction, precision})).toEqual(0);
  });

  test('can correctly round a six', () => {
    let number = 1.23456;
    let direction = DIRECTIONS.HALF_DOWN;
    let precision = 4;
    expect(round({number, direction, precision})).toEqual(1.2346);
  });

  test('can correctly round a six when negative', () => {
    let number = -1.23456;
    let direction = DIRECTIONS.HALF_DOWN;
    let precision = 4;
    expect(round({number, direction, precision})).toEqual(-1.2346);
  });

  test('can correctly round a 5', () => {
    let number = 0.285;
    let direction = DIRECTIONS.HALF_DOWN;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(0.28);
  });

  test('can correctly round a 5 when number is negative', () => {
    let number = -0.285;
    let direction = DIRECTIONS.HALF_DOWN;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(-0.28);
  });

  test('can correctly round a number that rolls', () => {
    let number = 0.999;
    let direction = DIRECTIONS.HALF_DOWN;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(1.00);
  });

  test('can correctly round a number that doesnt roll', () => {
    let number = 0.995;
    let direction = DIRECTIONS.HALF_DOWN;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(0.99);
  });

  test('can correctly round a number that just rolls', () => {
    let number = 0.996;
    let direction = DIRECTIONS.HALF_DOWN;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(1.00);
  });


});


describe('Round DOWN for positive numbers', () => {
  test('can round pi DOWN to 2 decimal places', () => {
    let number = 3.14159;
    let direction = DIRECTIONS.DOWN;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(3.14);
  });

  test('can round pi DOWN to 3 decimal places', () => {
    let number = 3.14159;
    let direction = DIRECTIONS.DOWN;
    let precision = 3;
    expect(round({number, direction, precision})).toEqual(3.141);
  });
});

describe('Round DOWN for negative numbers', () => {
  test('can round -pi DOWN to 2 decimal places', () => {
    let number = -3.14159;
    let direction = DIRECTIONS.DOWN;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(-3.14);
  });

  test('can round -pi DOWN to 3 decimal places', () => {
    let number = -3.14159;
    let direction = DIRECTIONS.DOWN;
    let precision = 3;
    expect(round({number, direction, precision})).toEqual(-3.141);
  });
});

describe('round DOWN handles boundaries', () => {
  test('rounds 5', () => {
    let number = 0.285;
    let direction = DIRECTIONS.DOWN;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(0.28);
  });

  test('rounds 5 when negative', () => {
    let number = -0.285;
    let direction = DIRECTIONS.DOWN;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(-0.28);
  });

  test('rounds 9', () => {
    let number = 0.299;
    let direction = DIRECTIONS.DOWN;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(0.29);
  });

  test('rounds 9 when negative', () => {
    let number = -0.299;
    let direction = DIRECTIONS.DOWN;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(-0.29);
  });

  test('doesnt round when precision is the same as the length of the number', () => {
    let number = 0.999;
    let direction = DIRECTIONS.DOWN;
    let precision = 3;
    expect(round({number, direction, precision})).toEqual(0.999);
  });

  test('doesnt round when precision is the same as the length of the negative number', () => {
    let number = -0.999;
    let direction = DIRECTIONS.DOWN;
    let precision = 3;
    expect(round({number, direction, precision})).toEqual(-0.999);
  });


  test('rounds a long number', () => {
    let number = 0.99999999;
    let direction = DIRECTIONS.DOWN;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(0.99);
  });

  test('rounds a long negative number', () => {
    let number = -0.99999999;
    let direction = DIRECTIONS.DOWN;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(-0.99);
  });
});


describe('Round DOWN handles edge cases', () => {
  test('supplied precision is longer than number', () => {
    let number = 3.14159;
    let direction = DIRECTIONS.DOWN;
    let precision = 10;
    expect(round({number, direction, precision})).toEqual(3.14159);
  });

  test('number is undefined', () => {
    let number;
    let direction = DIRECTIONS.DOWN;
    let precision = 10;
    expect(round({number, direction, precision})).toEqual(0);
  });
});


describe('Round UP for positive numbers', () => {
  test('can round pi UP to 2 decimal places', () => {
    let number = 3.14159;
    let direction = DIRECTIONS.UP;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(3.15);
  });

  test('can round pi UP to 3 decimal places', () => {
    let number = 3.14159;
    let direction = DIRECTIONS.UP;
    let precision = 3;
    expect(round({number, direction, precision})).toEqual(3.142);
  });
});

describe('Round UP for negative numbers', () => {
  test('can round -pi UP to 2 decimal places', () => {
    let number = -3.14159;
    let direction = DIRECTIONS.UP;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(-3.15);
  });

  test('can round -pi UP to 3 decimal places', () => {
    let number = -3.14159;
    let direction = DIRECTIONS.UP;
    let precision = 3;
    expect(round({number, direction, precision})).toEqual(-3.142);
  });
});

describe('round UP handles boundaries', () => {
  test('rounds 5', () => {
    let number = 0.285;
    let direction = DIRECTIONS.UP;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(0.29);
  });

  test('rounds 5 when negative', () => {
    let number = -0.285;
    let direction = DIRECTIONS.UP;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(-0.29);
  });

  test('rounds 9', () => {
    let number = 0.299;
    let direction = DIRECTIONS.UP;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(0.30);
  });

  test('rounds 9 when negative', () => {
    let number = -0.299;
    let direction = DIRECTIONS.UP;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(-0.30);
  });

  test('doesnt round when precision is the same as the length of the number', () => {
    let number = 0.999;
    let direction = DIRECTIONS.UP;
    let precision = 3;
    expect(round({number, direction, precision})).toEqual(0.999);
  });

  test('doesnt round when precision is the same as the length of the negative number', () => {
    let number = -0.999;
    let direction = DIRECTIONS.UP;
    let precision = 3;
    expect(round({number, direction, precision})).toEqual(-0.999);
  });


  test('rounds a long number', () => {
    let number = 0.99999999;
    let direction = DIRECTIONS.UP;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(1.00);
  });

  test('rounds a long negative number', () => {
    let number = -0.99999999;
    let direction = DIRECTIONS.UP;
    let precision = 2;
    expect(round({number, direction, precision})).toEqual(-1.00);
  });
});


describe('Round UP handles edge cases', () => {
  test('supplied precision is longer than number', () => {
    let number = 3.14159;
    let direction = DIRECTIONS.UP;
    let precision = 10;
    expect(round({number, direction, precision})).toEqual(3.14159);
  });

  test('number is undefined', () => {
    let number;
    let direction = DIRECTIONS.UP;
    let precision = 10;
    expect(round({number, direction, precision})).toEqual(0);
  });
});

describe('simpleRound gives the same results as HALF_UP', () => {
  test('simpleRound can round pi HALF_UP to 2 decimal places', () => {
    let number = 3.14159;
    expect(simpleRound(number)).toEqual(3.14);
  });

  test('simpleRound can round -pi HALF_UP to 2 decimal places', () => {
    let number = -3.14159;
    expect(simpleRound(number)).toEqual(-3.14);
  });

  test('number is undefined', () => {
    let number;
    expect(simpleRound(number)).toEqual(0);
  });
});

describe('simpleRound works for decimal fractions less than one', () => {
  test('a small number', () => {
    let number = 0.285;
    expect(simpleRound(number)).toEqual(0.29);
  });

  test('a smaller number', () => {
    let number = 0.284;
    expect(simpleRound(number)).toEqual(0.28);
  });

  test('a number that causes rollover', () => {
    let number = 0.099;
    expect(simpleRound(number)).toEqual(.10);
  });

  test('a number that causes rollover', () => {
    let number = 0.999;
    expect(simpleRound(number)).toEqual(1.00);
  });

  test('a number that causes rollover', () => {
    let number = 0.99;
    expect(simpleRound(number)).toEqual(0.99);
  });

  test('a small negative number that causes rollover', () => {
    let number = -0.999;
    expect(simpleRound(number)).toEqual(-1);
  });

  test('handles non-terminating decimals that round down', () => {
    let number = 0.333333;
    expect(simpleRound(number)).toEqual(0.33);
  });

  test('handles non-terminating decimals that round up', () => {
    let number = 0.6666666;
    expect(simpleRound(number)).toEqual(0.67);
  });

  test('handles non-terminating decimals that round up', () => {
    let number = 0.09666;
    expect(simpleRound(number)).toEqual(0.10);
  });
});

describe('Check for invalid input', () => {
  test('throws when number is not a number', () => {
    let number = 'Hamburger';
    expect(() => simpleRound(number)).toThrow();
  });

  test('throws when direction is out of range', () => {
    let number = 3.14159;
    let direction = 666;
    expect(() => round({number, direction})).toThrow();
  });

  test('throws when precision is negative', () => {
    let number = 3.14159;
    let precision = -1;
    expect(() => round({number, precision})).toThrow();
  });

  test('throws when precision is not an integer', () => {
    let number = 3.14159;
    let precision = 1.5;
    expect(() => round({number, precision})).toThrow();
  });

});

describe('fixedSimpleRound', () => {
  test('fixedSimpleRound returns 2 decimal places', () => {
    let number = 3.14159;
    expect(fixedSimpleRound(number)).toEqual("3.14");
  });

  test('fixedSimpleRound works for leading zeroes', () => {
    let number = 1.091;
    expect(fixedSimpleRound(number)).toEqual("1.09");
  });

  test('fixedSimpleRound works for leading zeroes', () => {
    let number = 1.099;
    expect(fixedSimpleRound(number)).toEqual("1.10");
  });

  test('fixedSimpleRound works for leading zeroes', () => {
    let number = -1.099;
    expect(fixedSimpleRound(number)).toEqual("-1.10");
  });

  test('fixedSimpleRound works for leading zeroes', () => {
    let number = 0.099;
    expect(fixedSimpleRound(number)).toEqual("0.10");
  });

  test('fixedSimpleRound works for leading zeroes', () => {
    let number = -0.099;
    expect(fixedSimpleRound(number)).toEqual("-0.10");
  });
});

describe('fixedRound', ()=> {
  test('fixedRound returns 2 decimal places', () => {
    let number = 3.14159;
    let precision = 2;
    expect(fixedRound({number, precision})).toEqual("3.14");
  });

  test('fixedRound works for leading zeroes', () => {
    let number = 1.091;
    expect(fixedRound({number})).toEqual("1.09");
  });

  test('fixedRound works for leading zeroes 1', () => {
    let number = 1.099;
    expect(fixedRound({number})).toEqual("1.10");
  });

  test('fixedRound works for leading zeroes 2', () => {
    let number = -1.099;
    expect(fixedRound({number})).toEqual("-1.10");
  });

  test('fixedRound works for leading zeroes 3', () => {
    let number = 0.099;
    expect(fixedRound({number})).toEqual("0.10");
  });

  test('fixedRound works for leading zeroes 4', () => {
    let number = -0.099;
    expect(fixedRound({number})).toEqual("-0.10");
  });

  test('fixedRound works for 3 decimal places', () => {
    let number = -0.0999;
    let precision = 3;
    expect(fixedRound({number, precision})).toEqual("-0.100");
  });

  test('fixedRound works for 3 decimal places rounding down', () => {
    let number = -0.0999;
    let precision = 3;
    let direction = DIRECTIONS.DOWN;
    expect(fixedRound({number, precision, direction})).toEqual("-0.099");
  });

  test('fixedRound works for 3 decimal places rounding up', () => {
    let number = -0.0999;
    let precision = 3;
    let direction = DIRECTIONS.UP;
    expect(fixedRound({number, precision, direction})).toEqual("-0.100");
  });

});


describe('Zero-precision cases', ()=> {
  test('123.5 to 0 precision HALF_DOWN', ()=> {
    let number = 123.5;
    let precision = 0;
    let direction = DIRECTIONS.HALF_DOWN;
    expect(round({number, precision, direction})).toEqual(123);
  });

  test('123.4 to 0 precision HALF_UP', ()=> {
    let number = 123.4;
    let precision = 0;
    let direction = DIRECTIONS.HALF_UP;
    expect(round({number, precision, direction})).toEqual(123);
  });

  test('123.6 to 0 precision HALF_UP', ()=> {
    let number = 123.6;
    let precision = 0;
    let direction = DIRECTIONS.HALF_UP;
    expect(round({number, precision, direction})).toEqual(124);
  });

  test('123.5 to 0 precision HALF_UP', ()=> {
    let number = 123.5;
    let precision = 0;
    let direction = DIRECTIONS.HALF_UP;
    expect(round({number, precision, direction})).toEqual(124);
  });

  test('-123.5 to 0 precision HALF_UP', ()=> {
    let number = -123.5;
    let precision = 0;
    let direction = DIRECTIONS.HALF_UP;
    expect(round({number, precision, direction})).toEqual(-124);
  })

});








