
var token = '';
var operandStack = [];
var operatorStack = [];

var lastOperator = '';
var lastOperand = 0;

var precedence = {
    '+' : 1,
    '-' : 1,
    '*' : 2,
    '/' : 2
}

Number.prototype.format = function() {
    // Handle exponentials
    if (Math.abs(this) >= 1e16 || 
        (Math.abs(this) <= 1e-16 && this != 0)) {
        return this.toExponential().toString();
    }

    var str = this.toString();
    var decimalLength = 0;
    var decimalIndex = str.indexOf('.');
    if (decimalIndex != -1) {
        decimalLength = str.substring(decimalIndex).length;
    }

    if (decimalLength >= 17) {
        return this.toFixed(15).toString();
    } else {
        return this.toString();
    }
}

Array.prototype.top = function() {
    return this[this.length - 1];
}

function putSymbol(symbol) {

    // Handle decimals / other symbol collection
    if (symbol != '.' || 
       (symbol == '.' && token.indexOf('.') == -1)) {
        token += symbol;
    }

    // Don't round if decimal at end of string
    if (token.charAt(token.length - 1) == '.') {
        return token;
    }

    // Round and return
    return parseFloat(token).format();
}

function handleOp(operator) {
    // Push current token to output queue, reset it
    if (token != '') {
        operandStack.push(token);
        token = '';
    }

    // Compute if precedence less than previous operator
    if (precedence[operator] <= precedence[operatorStack.top()]) {
        compute();
    }

    // Push operator to stack
    operatorStack.push(operator);

    return parseFloat(operandStack.top()).format();
}

function handleAdd() {
    return handleOp('+');
};

function handleSubtract() {
    return handleOp('-');
};

function handleMultiply() {
    return handleOp('*');
};

function handleDivide() {
    return handleOp('/');
};

function handlePercent() {
    // Push current token to operand stack
    if (token != '') {
        operandStack.push(token);
        token = '';
    }

    // Handle start state
    if (operandStack.length == 0) {
        return 0;
    }

    // Divide by 100
    var operand = parseFloat(operandStack.pop());
    operand /= 100;
    operandStack.push(operand);
    return operand;
};

function handlePlusMinus() {
    // Push current token to operand stack
    if (token != '') {
        operandStack.push(token);
        token = '';
    }

    // Handle start state
    if (operandStack.length == 0) {
        return 0;
    }

    // Negate
    var operand = parseFloat(operandStack.pop());
    operand *= -1;
    operandStack.push(operand);
    return operand;
};

function handleAllClear() {
    token = '';
    operandStack = [];
    operatorStack = [];
    lastOperator = '';
    lastOperand = 0;

    return 0;
};

function handleClear() {

};

function handleEquals() {
    if (token != '') {
        // Push current token to operand stack
        operandStack.push(token);
        token = '';

        // Compute until there are no more operators
        while (operatorStack.length > 0) {
            compute();
        }
    } else {
        if (lastOperand != '' && lastOperator != '') {
            // Repeat last operation
            operandStack.push(lastOperand);
            operatorStack.push(lastOperator);
            compute();
        }
    }

    // Return the resulting top of stack
    return parseFloat(operandStack.top()).format();
};

function compute() {
    // Pop operator from stack
    var operator = operatorStack.pop();

    // Retrieve operands
    var op1 = parseFloat(operandStack.pop());
    var op2 = parseFloat(operandStack.pop());

    // Compute
    var result = 0;
    switch(operator) {
        case '+':
            result = op2 + op1;
            break;
        case '-':
            result = op2 - op1;
            break;
        case '*':
            result = op2 * op1;
            break;
        case '/':
            result = op2 / op1;
            break;
    }

    // Put result on top of queue
    operandStack.push(result.toString());

    // Save operator/operand for repeat operation
    lastOperator = operator;
    lastOperand = op1.toString();
}

export {
    putSymbol,
    handleAdd,
    handleSubtract,
    handleMultiply,
    handleDivide,
    handlePlusMinus,
    handlePercent,
    handleAllClear,
    handleClear,
    handleEquals
};
