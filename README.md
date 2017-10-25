# Simple-round

JavaScript does some [very crazy things](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) with rounding.  

Most of us were taught in school to use the 'round half up' method, like so:

```javascript
Round 3.14159 to 1 decimal place

=> 3.1

Round 3.14159 to 2 decimal places

=> 3.14

Round 3.14159 to 3 decimal places

=> 3.142

Round 3.14159 to 4 decimal places

=> 3.1416

```

IE, if you are rounding to 'x' places, and the digit in the 'x+1' position is equal to or greater than 5, round the 'x-th' digit up.  Otherwise just drop the extra decimal places.

This module helps you do just that.  It also provides a more granular method if you prefer a different rounding strategy.

## Installation

```bash
npm install simple-round
```

## API

* NB: Don't forget the curly braces in your `require`! *

### simpleRound(number)
Supply the `number` argument, and get rounding HALF_UP to 2 decimal places:

```javascript
const {simpleRound} = require('simple-round');

expect(simpleRound(3.14159)).toEqual(3.14);

expect(simpleRound(2.345)).toEqual(2.35);

expect(simpleRound(0.999)).toEqual(1.00);

expect(simpleRound(0.285)).toEqual(0.29);
```

### round({number, direction, precision})

- `precision` must be a non-negative integer
- `number` must be a number
- `direction` is defined in the example below

```javascript
const {round, DIRECTIONS} = require('simple-round');

/*
DIRECTIONS.UP
DIRECTIONS.DOWN
DIRECTIONS.HALF_UP
DIRECTIONS.HALF_DOWN
 */


let number = 3.14159;
let direction = DIRECTIONS.DOWN;
let precision = 3;

expect(round({number, direction, precision})).toEqual(3.141);

let direction = DIRECTIONS.UP;

expect(round({number, direction, precision})).toEqual(3.142);

let direction = DIRECTIONS.HALF_UP;

expect(round({number, direction, precision})).toEqual(3.142);

let direction = DIRECTIONS.HALF_DOWN;

expect(round({number, direction, precision})).toEqual(3.141);

```
## Testing

```bash
npm run test
```
