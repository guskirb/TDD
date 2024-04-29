import capitalise from "./capitalise";
import reverseString from "./reverse";
import calculator from "./calculator";

test('Capitalises', () => {
    expect(capitalise('hello')).toBe('Hello');
});

test('Reverses', () => {
    expect(reverseString('hello')).toBe('olleh');
})

test('Calculates', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(2, 1)).toBe(1);
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.multiply(5, 2)).toBe(10);
})