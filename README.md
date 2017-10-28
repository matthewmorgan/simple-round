# Simple-round

JavaScript does some [very crazy things](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) with rounding.  

*TL,DR;* Use the [default method](#default_method) to round sanely and get back a 2-decimal place string.

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

If you are rounding to 'x' places, and the digit in the 'x+1' position is equal to or greater than 5, round the 'x-th' digit up.  Otherwise just drop the extra decimal places.

This module helps you do just that.  It also provides more granular methods if you prefer a different rounding strategy.

## Installation

```bash
npm install simple-round
```

## API

`simple-round` can return your rounded number as either a `number` or `string`, depending on which method you pick.

### String output

#### <a name="default_method">fixedSimpleRound(number)</a>

The default method both rounds half-up to 2 decimal places and returns the result as a string, formatted to 2 decimal places.  This is different than using JavaScript's `Number.toFixed()` method, which sometimes rounds up and sometimes rounds down (?), or `Math.round()`, which does things you might not expect, including returning your result in scientific notation, because...?

NB: because this is the _default_ export from the module, you don't need the `{braces}` to import `fixedSimpleRound`!

```javascript
const fixedSimpleRound = require('simple-round');

expect(fixedSimpleRound(3.14159)).toEqual('3.14');
```

#### fixedRound({number, direction, precision})

Need more control?  Yes, the `{braces}` are required, in both the `require` and the method call:

Params:
- `precision` <integer> (non-negative)
- `number` <number>
- `direction` <integer> (from the set below)

```javascript
const {fixedRound, DIRECTIONS} = require('simple-round');

let number = 0.9999;
let direction = DIRECTIONS.DOWN;
let precision = 3;

expect(fixedRound({number, direction, precision})).toEqual('0.999');

let direction = DIRECTIONS.UP;

expect(fixedRound({number, direction, precision})).toEqual("1.000");
```

Default behavior for `fixedRound` is rounding half-up, to 2 decimal places.  Omit either or both of those arguments if that's OK with you.

### Number output

These two methods return your result as a number.  The rounding will be correct, but leading or trailing zeros might be dropped.

#### simpleRound(number)

Supply the `number` argument.  Rounds HALF_UP to 2 decimal places:

```javascript
const {simpleRound} = require('simple-round');

expect(simpleRound(3.14159)).toEqual(3.14);

expect(simpleRound(2.345)).toEqual(2.35);

expect(simpleRound(0.999)).toEqual(1.00);

expect(simpleRound(0.285)).toEqual(0.29);
```

#### round({number, direction, precision})

Params as above. Yes, the `{braces}` are required, in both the `require` and the method call:

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

Default behavior for `round()` is to round HALF_UP to 2 decimal places.  Omit either or both of those arguments if that's OK with you.
## Testing

```bash
npm run test
```
