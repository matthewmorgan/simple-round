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

This module helps you do just that.

## Installation

```bash
npm install @matthewmorgan/round-half-up
```

## API

### round({number, direction, precision})

```javascript
const {round, DIRECTIONS} = require('simple-round');


const args = {
  number: 3.14159,
  precision: 2,
  direction: DIRECTIONS.HALF_UP
};

expect(round(args)).toEqual(3.14);
````

Note: sanity rules with negative numbers as well.  Does not round toward positive infinity like default JS methods.

```javascript
const otherArgs = {
    number: -3.14159,
    precision: 4
};

expect(round(otherArgs)).toEqual(-3.1416);
```

Available `DIRECTIONS` currently include `HALF_UP` (default) `HALF_DOWN`, `UP`, and `DOWN`.

Default `precision` is 2.
### simpleRound(number)
There is a convenience method that allows you to only supply the `number` argument, and get rounding HALF_UP to 2 decimal places:

```javascript
const {simpleRound} = require('simple-round');

expect(simpleRound(3.14159)).toEqual(3.14);
expect(simpleRound(2.345)).toEqual(2.35);
```

## Testing

```bash
npm run test
```
