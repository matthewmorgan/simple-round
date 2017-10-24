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
npm install simple-round
```

## API

### simpleRound(number)
Supply the `number` argument, and get rounding HALF_UP to 2 decimal places:

```javascript
const {simpleRound} = require('simple-round');

expect(simpleRound(3.14159)).toEqual(3.14);

expect(simpleRound(2.345)).toEqual(2.35);

expect(simpleRound(0.999)).toEqual(1.00);

expect(simpleRound(0.285)).toEqual(0.29);
```

## Testing

```bash
npm run test
```
