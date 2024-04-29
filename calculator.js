class Calculator {
    constructor() {
        this.add = this.add;
        this.subtract = this.subtract;
        this.divide = this.divide;
        this.multiply = this.multiply;
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    divide(a, b) {
        return a / b;
    }

    multiply(a, b) {
        return a * b;
    }
}

const calculator = new Calculator;
export default calculator;