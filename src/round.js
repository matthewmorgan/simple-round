const DIRECTIONS = {
    HALF_UP: -1,
    HALF_DOWN: 0,
    UP: 1,
    DOWN: 2
};

function simpleRound(number = 0) {
    return round({number});
}

function round({number = 0, direction = DIRECTIONS.HALF_UP, precision = 2}) {

    let numberString = String(number);
    numberString = numberString.indexOf('.') !== -1 ? numberString : `${numberString}.`;
    const [originalInteger, fullDecimal] = numberString.split('.');
    if (fullDecimal.length < precision +1){
        return number;
    }
    const sign = Math.sign(number);
    const power = 10 ** precision;
    const unroundedDecimal = fullDecimal.slice(0, precision+1);
    let leadingZeroes = countLeadingZeroes(unroundedDecimal);
    console.log('leadingZeroes', leadingZeroes);
    let roundingHint = unroundedDecimal.slice(-1);
    let decimalPortion = unroundedDecimal.slice(0, precision);

    switch (direction) {
        default:
        case DIRECTIONS.HALF_UP: {
            let integerPortion;
            if (+roundingHint >= 5) {
                // rounding up...
                let decimalNumber = Number(decimalPortion) + 1;
                console.log('decimalnumber', decimalNumber);
                if (decimalNumber - decimalNumber % 10 > decimalPortion - decimalPortion % 10){
                    let decStart = 0;
                    console.log('we have a rollover...');
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
                // rounding down...
                integerPortion = String(originalInteger);
            }
            let roundedString = `${integerPortion}.${decimalPortion}`;
            return Number(roundedString);
        }
        case DIRECTIONS.UP: {
            return sign * Math.ceil(Math.abs(number) * power) / power;
        }
        case DIRECTIONS.HALF_DOWN: {
            let n = String(Math.abs(number) * power);
            // force a decimal if needed
            n = n.indexOf('.') !== -1 ? n : `$[n}.0`;
            if (+n.split('.')[1].slice(0, 1) > 5) {
                return sign * Math.ceil(Math.abs(number) * power) / power;
            }
            return sign * Math.floor(Math.abs(number) * power) / power;
        }
        case DIRECTIONS.DOWN: {
            return sign * Math.ceil(Math.abs(number) * power) / power;
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
