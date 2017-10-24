const DIRECTIONS = {
    HALF_UP: -1,
    HALF_DOWN: 0,
    UP: 1,
    DOWN: 2
};

function simpleRound(number = 0) {
    return round({number});
}

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength,padString) {
        targetLength = targetLength>>0; //floor if number or convert non-number to 0;
        padString = String(padString || ' ');
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0,targetLength) + String(this);
        }
    };
}

function round({number = 0, direction = DIRECTIONS.HALF_UP, precision = 2}) {

    let numberString = String(number);
    numberString = numberString.indexOf('.') !== -1 ? numberString : `${numberString}.`;
    const [originalInteger, fullDecimal] = numberString.split('.');
    if (fullDecimal.length < precision +1){
        return number;
    }

    const unroundedDecimal = fullDecimal.slice(0, precision+1);
    let leadingZeroes = countLeadingZeroes(unroundedDecimal);
    let roundingHint = unroundedDecimal.slice(-1);
    let decimalPortion = unroundedDecimal.slice(0, precision);

    switch (direction) {
        default:
        case DIRECTIONS.HALF_UP: {
            let integerPortion;
            if (+roundingHint >= 5) {
                let decimalNumber = Number(decimalPortion) + 1;
                if (decimalNumber - decimalNumber % 10 > decimalPortion - decimalPortion % 10){
                    let decStart = 0;
                    let integerNumber;
                    if (leadingZeroes === 0){
                        integerNumber = Number(originalInteger) + 1;
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
            }
            return Number(`${integerPortion}.${decimalPortion}`);
        }
    }
}

function countLeadingZeroes(num){
    let i = 0;
    for (let n of num){
        if (n !== '0'){
            return i;
        }
        i++;
    }
    return i;
}

export {round, simpleRound, DIRECTIONS};
