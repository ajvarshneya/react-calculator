var value = 0;
var current = 0;
var operation = 0;
var decimal = 0;
var digits = false;

function digit(num) {
    digits = true;
    current = 10 * current + num;

    return current;
}

function add() {
    if (digits) {
        value = compute();
    }

    current = 0;
    digits = false;

    operation = 0;
    return value;
};

function subtract() {
    if (digits) {
        value = compute();
    }

    current = 0;
    digits = false;

    operation = 1;
    return value;
};

function multiply() {
    if (digits) {
        value = compute();
        console.log(value);
    }

    current = 0;
    digits = false;

    operation = 2;
    return value;
};

function divide() {
    if (digits) {
        value = compute();
    }

    current = 0;
    digits = false;

    operation = 3;
    return value;
};

function percent() {
    if (digits) {
        value = compute();
    }

    current = 0;
    digits = false;

    operation = 4;
    return value;
};

function plusMinus() {
    if (digits) {
        current *= -1;
    } else {
        value *= -1;
    }

    return current;
};

function decimal() {
    return value;
};

function ac() {
    value = 0;
    current = 0;
    return value;
};

function result() {
    value = compute();
    digits = false;

    return value;
};

function compute() {
    switch (operation) {
        case 0:
            return value + current;
        case 1:
            return value - current;
        case 2:
            return value * current;
        case 3:
            return value / current;
        case 4:
            return value / 100;
        default:
            return 0;
    }
}

export {
    value,
    digit,
    add,
    subtract,
    multiply,
    divide,
    plusMinus,
    percent,
    decimal,
    ac,
    result
};
