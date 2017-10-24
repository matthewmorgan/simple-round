import {round, simpleRound, DIRECTIONS} from '../src/round';

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

  test('can correctly round a four', ()=> {
    let number = 3.14159;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 1;
    expect(round({number, direction, precision})).toEqual(3.1);
  });

  test('can correctly round a four when negative', ()=> {
    let number = -3.14159;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 1;
    expect(round({number, direction, precision})).toEqual(-3.1);
  });


  test('can correctly round a six', ()=> {
    let number = 1.23456;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 4;
    expect(round({number, direction, precision})).toEqual(1.2346);
  });

  test('can correctly round a six when negative', ()=> {
    let number = -1.23456;
    let direction = DIRECTIONS.HALF_UP;
    let precision = 4;
    expect(round({number, direction, precision})).toEqual(-1.2346);
  });
});
//
// describe('Round HALF_DOWN for positive numbers', ()=> {
//   test('can round pi HALF_DOWN to 2 decimal places', ()=>{
//     let number = 3.14159;
//     let direction = DIRECTIONS.HALF_DOWN;
//     let precision = 2;
//     expect(round({number, direction, precision})).toEqual(3.14);
//   });
//
//   test('can round pi HALF_DOWN to 3 decimal places', ()=>{
//     let number = 3.14159;
//     let direction = DIRECTIONS.HALF_DOWN;
//     let precision = 3;
//     expect(round({number, direction, precision})).toEqual(3.141);
//   });
// });
//
// describe('Round HALF_DOWN for negative numbers', ()=> {
//   test('can round -pi HALF_DOWN to 2 decimal places', ()=>{
//     let number = -3.14159;
//     let direction = DIRECTIONS.HALF_DOWN;
//     let precision = 2;
//     expect(round({number, direction, precision})).toEqual(-3.14);
//   });
//
//   test('can round -pi HALF_DOWN to 3 decimal places', ()=>{
//     let number = -3.14159;
//     let direction = DIRECTIONS.HALF_DOWN;
//     let precision = 3;
//     expect(round({number, direction, precision})).toEqual(-3.141);
//   });
// });
//
// describe('Round HALF_DOWN handles edge cases', ()=> {
//   test('supplied precision is longer than number', ()=> {
//     let number = 3.14159;
//     let direction = DIRECTIONS.HALF_DOWN;
//     let precision = 10;
//     expect(round({number, direction, precision})).toEqual(3.14159);
//   });
//
//   test('number is undefined', ()=> {
//     let number;
//     let direction = DIRECTIONS.HALF_DOWN;
//     let precision = 10;
//     expect(round({number, direction, precision})).toEqual(0);
//   });
//
//   test('can correctly round a six', ()=> {
//     let number = 1.23456;
//     let direction = DIRECTIONS.HALF_DOWN;
//     let precision = 4;
//     expect(round({number, direction, precision})).toEqual(1.2346);
//   });
//
//   test('can correctly round a six when negative', ()=> {
//     let number = -1.23456;
//     let direction = DIRECTIONS.HALF_UP;
//     let precision = 4;
//     expect(round({number, direction, precision})).toEqual(-1.2346);
//   });
// });
//
// describe('Round UP for positive numbers', ()=> {
//   test('can round pi UP to 2 decimal places', ()=>{
//     let number = 3.14159;
//     let direction = DIRECTIONS.UP;
//     let precision = 2;
//     expect(round({number, direction, precision})).toEqual(3.15);
//   });
//
//   test('can round pi UP to 3 decimal places', ()=>{
//     let number = 3.14159;
//     let direction = DIRECTIONS.UP;
//     let precision = 3;
//     expect(round({number, direction, precision})).toEqual(3.142);
//   });
// });
//
// describe('Round UP for negative numbers', ()=> {
//   test('can round -pi UP to 2 decimal places', ()=>{
//     let number = -3.14159;
//     let direction = DIRECTIONS.UP;
//     let precision = 2;
//     expect(round({number, direction, precision})).toEqual(-3.15);
//   });
//
//   test('can round -pi UP to 3 decimal places', ()=>{
//     let number = -3.14159;
//     let direction = DIRECTIONS.UP;
//     let precision = 3;
//     expect(round({number, direction, precision})).toEqual(-3.142);
//   });
// });
//
// describe('Round UP handles edge cases', ()=> {
//   test('supplied precision is longer than number', ()=> {
//     let number = 3.14159;
//     let direction = DIRECTIONS.UP;
//     let precision = 10;
//     expect(round({number, direction, precision})).toEqual(3.14159);
//   });
//
//   test('number is undefined', ()=> {
//     let number;
//     let direction = DIRECTIONS.UP;
//     let precision = 10;
//     expect(round({number, direction, precision})).toEqual(0);
//   });
// });
//
describe('simpleRound gives the same results as HALF_UP', ()=> {
  test('simpleRound can round pi HALF_UP to 2 decimal places', ()=>{
    let number = 3.14159;
    expect(simpleRound(number)).toEqual(3.14);
  });

  test('simpleRound can round -pi HALF_UP to 2 decimal places', ()=>{
    let number = -3.14159;
    expect(simpleRound(number)).toEqual(-3.14);
  });

  test('number is undefined', ()=> {
    let number;
    expect(simpleRound(number)).toEqual(0);
  });
});

describe('simpleRound works for decimal fractions less than one', ()=> {
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

    test('a number that causes rollover', ()=> {
        let number = 0.999;
        expect(simpleRound(number)).toEqual(1.00);
    })

    test('handles non-terminating decimals that round down', ()=> {
      let number = 0.333333;
      expect(simpleRound(number)).toEqual(0.33);
    })

    test('handles non-terminating decimals that round up', ()=> {
        let number = 0.6666666;
        expect(simpleRound(number)).toEqual(0.67);
    })

    test('handles non-terminating decimals that round up', ()=> {
        let number = 0.09666;
        expect(simpleRound(number)).toEqual(0.10);
    })


});







